import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RestProvider}from '../../providers/rest/rest';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the AuthordetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authordetail',
  templateUrl: 'authordetail.html',
})
export class AuthordetailPage {
  data:any;
response:any;
i:any;
  uniarray:any[]=[];
  count=0;
  x:any;
  y:any;
  found=false;
  myObj:any[]=[];
  constructor( private sqlite: SQLite,public navCtrl: NavController,public rest:RestProvider, public navParams: NavParams) {
    
  this.response=this.rest.all;
      this.data=this.navParams.data.params;
      console.log(this.data);

      this.sqlite.create({
        name: 'qoutes.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('SELECT * FROM qoutes WHERE author=?', [this.data.author])
        .then(res => {
          this.myObj = [];
          for(var i=0; i<res.rows.length; i++) {
            this.myObj.push({qoute:res.rows.item(i).qoute,author:res.rows.item(i).author,is_Fav:res.rows.item(i).is_Fav,img_name:res.rows.item(i).img_name})
          }
          console.log(this.myObj);
         
      });
      });
      




    //  this.uniqauthor();
  }



  goTo(QuoteDetail,params,i,type){
		this.navCtrl.push(QuoteDetail,{params:params,i:i,type:type});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthordetailPage');
  }

//   uniqauthor(){

//     for(this.x=0;this.x<this.response.length;this.x++){
   
//   if(this.response[this.x].from==this.data.from) 
//   { 
//   this.uniarray.push(this.response[this.x]);
// }
//   }
//     console.log(this.uniarray);
//     }


}
