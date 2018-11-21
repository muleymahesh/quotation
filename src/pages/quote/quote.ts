import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{RestProvider}from '../../providers/rest/rest';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
response:any=[]=[];
 myObj:any[]=[];
  constructor(public navCtrl: NavController,public rest:RestProvider ,private storage: Storage, private sqlite: SQLite) {
    //this.response = JSON.stringify(this.myObj);
  this.getAllQoutes();
  this.response
    console.log(this.response);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }
   getAllQoutes()
  {
    this.sqlite.create({
      name: 'qoutes.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM qoutes', [])
      .then(res => {
        this.myObj = [];
        for(var i=0; i<res.rows.length; i++) {
          this.myObj.push({qoute:res.rows.item(i).qoute,author:res.rows.item(i).author,is_Fav:res.rows.item(i).is_Fav,img_name:res.rows.item(i).img_name})
        }
        console.log(this.myObj);
       
    });
  });
  } 
  goTo(page, params,i){
		this.navCtrl.push(page,{params:params,i:i,d_type:'all'});
  }
  
  

}
