import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RestProvider}from '../../providers/rest/rest'
import{QuoteProvider}from '../../providers/quote/quote'
/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {

  response:any;
 
  constructor(public navCtrl: NavController,public _qute:QuoteProvider,public rest:RestProvider ,private storage: Storage,) {
//this.response=this._qute.all;
this.response=null;
console.log(this.response);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }

}
