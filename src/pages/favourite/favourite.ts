import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import{RestProvider}from '../../providers/rest/rest'
import{QuoteProvider}from '../../providers/quote/quote'
/**

/**
 * Generated class for the FavouritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourite',
  templateUrl: 'favourite.html',
})
export class FavouritePage {
response:any;
  constructor(public navCtrl: NavController,public _qute:QuoteProvider,public rest:RestProvider) {
    this.response=this._qute.all;
   // this.response=null;
    console.log(this._qute.all);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritePage');
  }

}
