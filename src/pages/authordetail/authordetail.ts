import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{RestProvider}from '../../providers/rest/rest';
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
  constructor(public navCtrl: NavController,public rest:RestProvider, public navParams: NavParams) {
    
  this.response=this.rest.all;
      this.data=this.navParams.data.params;
      console.log(this.data);
      this.uniqauthor();
  }



  goTo(QuoteDetail,params,i){
		this.navCtrl.push(QuoteDetail,{params:params,i:i});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthordetailPage');
  }

  uniqauthor(){

    for(this.x=0;this.x<this.response.length;this.x++){
   
  if(this.response[this.x].from==this.data.from) 
  { 
  this.uniarray.push(this.response[this.x]);
}
  }
    console.log(this.uniarray);
    }


}
