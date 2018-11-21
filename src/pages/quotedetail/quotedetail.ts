import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import{QuoteProvider}from '../../providers/quote/quote'
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the QuotedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotedetail',
  templateUrl: 'quotedetail.html',
})
export class QuotedetailPage {
 response:any;
 j:any;
 message:any;
quotes:any;
favquotes:any[]=[];
myObj:any[]=[];
  constructor( private sqlite: SQLite,public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing,private _quote:QuoteProvider) {
  //   this.quotes=this.navParams.data.params;
  //   this.j=this.navParams.data.i;
  //  if(this.navParams.data.type=='author')
  //  {
  //   this.sqlite.create({
  //     name: 'qoutes.db',
  //     location: 'default'
  //   }).then((db: SQLiteObject) => {
  //     db.executeSql('SELECT * FROM qoutes WHERE author=?', [this.quotes.author])
  //     .then(res => {
  //       this.myObj = [];
  //       for(var i=0; i<res.rows.length; i++) {
  //         this.myObj.push({qoute:res.rows.item(i).qoute,author:res.rows.item(i).author,is_Fav:res.rows.item(i).is_Fav,img_name:res.rows.item(i).img_name})
  //       }
  //       console.log(JSON.stringify(this.myObj));
    
  //   });
  //   });
  //  }
  // else if(this.navParams.data.type=='all')
  //  {
  //   this.sqlite.create({
  //     name: 'qoutes.db',
  //     location: 'default'
  //   }).then((db: SQLiteObject) => {
  //     db.executeSql('SELECT * FROM qoutes', [])
  //     .then(res => {
  //       this.myObj = [];
  //       for(var i=0; i<res.rows.length; i++) {
  //         this.myObj.push({qoute:res.rows.item(i).qoute,author:res.rows.item(i).author,is_Fav:res.rows.item(i).is_Fav,img_name:res.rows.item(i).img_name})
  //       }
  //       console.log(JSON.stringify(this.myObj));
    
  //   });
  //   });
  //  }
  //  // console.log(this.quotes);
   
   // console.log(this.i);
  }

  ionViewDidLoad() {
   // this.favquotes=this._quote.all;
   // console.log(this.favquotes);
    console.log('ionViewDidLoad QuotedetailPage');
  }

  privous(){
    if(this.j!=0)
   this.j=this.j-1;
  }

  next(){
    if(this.j<this.myObj.length && this.j!=[this.myObj.length-1])
  {
    this.j=this.j+1;
   //this. checkfav();
   }
  }

  share(){
    this.message=" Life isn't about getting and having, it's about giving and being.";
    this.socialSharing.share(this.message)
    .then(()=>{

    }).catch(()=>{

    });
  }
// checkfav(quote)
// {
//   this.favquotes=this._quote.all;


// }
//   toFav(abc){

//     console.log(abc);
//     this._quote.post(abc);
//   }
 
// }
}