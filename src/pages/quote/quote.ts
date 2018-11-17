import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import{RestProvider}from '../../providers/rest/rest'
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
 
  constructor(public navCtrl: NavController,public rest:RestProvider ,private storage: Storage,) {
    //this.response = JSON.stringify(this.myObj);
  
  this.response=this.rest.all;
    console.log(this.response);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }

  goTo(QuoteDetail, params,i){
		this.navCtrl.push(QuoteDetail,{params:params,i:i});
  }
  
  

}
