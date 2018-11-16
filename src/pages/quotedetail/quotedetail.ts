import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import{QuoteProvider}from '../../providers/quote/quote'
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
 i:any;
 message:any;
quotes:any[]=[];
favquotes:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing,private _quote:QuoteProvider) {
   // this.response=this.navParams.data.params.response;
   // console.log(this.response);

   this.favquotes=this._quote.all;

    this.quotes=this.navParams.data.params;
    this.i=this.navParams.data.i;
    console.log(this.favquotes);
   
    console.log(this.quotes);
   
    console.log(this.i);
  }

  ionViewDidLoad() {
    this.favquotes=this._quote.all;
    console.log(this.favquotes);
    console.log('ionViewDidLoad QuotedetailPage');
  }

  privous(){
    if(this.i!=0)
   this.i=this.i-1;
  }

  next(){
    if(this.i<this.quotes.length && this.i!=[this.quotes.length-1])
    this.i=this.i+1;
   }

  share(){
    this.message=" Life isn't about getting and having, it's about giving and being.";
    this.socialSharing.share(this.message)
    .then(()=>{

    }).catch(()=>{

    });
  }

  toFav(quote){
    this._quote.post(quote);
  }
 
}
