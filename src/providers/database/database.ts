import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';
 
@Injectable()
export class DatabaseProvider {
  database: SQLiteObject;
  private databaseReady: BehaviorSubject<boolean>;
 
  constructor(public sqlitePorter: SQLitePorter, private storage: Storage, private sqlite: SQLite, private platform: Platform, private http: Http) {
    this.databaseReady = new BehaviorSubject(false);
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'qoutes.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.database = db;
          this.storage.get('database_filled').then(val => {
            if (val) {
              this.databaseReady.next(true);
            } else {
              this.fillDatabase();
            }
          });
        });
    });
  }
 
  fillDatabase() {
    this.http.get('assets/data.sql')
      .map(res => res.text())
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(data => {
            this.databaseReady.next(true);
            this.storage.set('database_filled', true);
          })
          .catch(e => console.error(e));
      });
  }
 
  addDeveloper(name, skill, years) {
    let data = [name, skill, years]
    return this.database.executeSql("INSERT INTO developer (name, skill, yearsOfExperience) VALUES (?, ?, ?)", data).then(data => {
      return data;
    }, err => {
      console.log('Error: ', err);
      return err;
    });
  }
 
  getAllDevelopers() {
    return this.database.executeSql("SELECT * FROM data", []).then((data) => {
      let qoutes = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          qoutes.push({ text: data.rows.item(i).text, from: data.rows.item(i).from, img_name: data.rows.item(i).img_name, isFav:data.rows.item(i).isFav });
        }
      }
      return qoutes;
    }, err => {
      console.log('Error: ', err);
      return [];
    });
  }
 
  getDatabaseState() {
    return this.databaseReady.asObservable();
  }
 
}
