import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{RestProvider}from '../../providers/rest/rest';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the AuthorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-author',
  templateUrl: 'author.html',
})
export class AuthorPage {
  response:any;
  uniarray:any[]=[];
  count=0;
  x:any;
  y:any;
  found=false;
  myObj:any[]=[];
  constructor(public rest:RestProvider, private sqlite: SQLite ,public navCtrl: NavController, private storage: Storage,) {
  
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
    this.uniqauthor();
});
});


   

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorPage');
  }

  goTo(page, params){
		this.navCtrl.push(page,{params: params});
  }
  

 uniqauthor(){

    for(this.x=0;this.x<this.myObj.length;this.x++){
    for(this.y=0;this.y<this.uniarray.length;this.y++){
    if(this.myObj[this.x].author==this.uniarray[this.y].author){
      this.found=true;
    }
    
    }
    this.count++;
    if(this.count==1 && this.found==false){
      this.uniarray.push(this.myObj[this.x]);
    }
    this.count=0;
    this.found=false;
    }
    console.log(JSON.stringify(this.uniarray));
    }
  }
