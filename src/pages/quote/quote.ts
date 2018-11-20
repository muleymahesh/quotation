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
response:any;
 data:any[]=[];
  constructor(public navCtrl: NavController,private sqlite: SQLite,public rest:RestProvider ,private storage: Storage,) {
    //this.response = JSON.stringify(this.myObj);
  this.getQuotes();
  this.data;
  this.response=this.rest.all;
    console.log(this.response);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  getQuotes(){
    this.sqlite.create({
      name: 'quotes.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('SELECT * FROM quotes', [])
      .then(res => {
        this.data = [];
        for(var i=0; i<res.rows.length; i++) {
          this.data.push({quote:res.rows.item(i).quote,author:res.rows.item(i).author,isFav:res.rows.item(i).isFav,img_name:res.rows.item(i).img_name})
        }
      
    });
  });
}

  goTo(QuoteDetail, params,i){
		this.navCtrl.push(QuoteDetail,{params:params,i:i});
  }
  
  

}
