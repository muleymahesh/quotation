import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from '@ionic/storage';
import{RestProvider}from '../../providers/rest/rest';
import { DatabaseProvider } from './../../providers/database/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  developer = {};
  developers = [];
  response:any;
  message:string=null;
  file:string=null;
  link:string=null;
  subject:string=null;
  random;
  ranno;
  i;
  constructor(public rest:RestProvider ,public navCtrl: NavController, private storage: Storage, private socialSharing: SocialSharing,private databaseprovider: DatabaseProvider, private platform: Platform) {
   //this.response = JSON.stringify(this.myObj);
  
  
   this.databaseprovider.getDatabaseState().subscribe(rdy => {
    if (rdy) {
      this.loadDeveloperData();
    }
  })
  
  
  
  
  
   this.random=getRandomArbitrary(0,324);
   function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;

  }
  this.ranno=parseInt(this.random);
   
      console.log(this.response);

for(this.i=0;this.i<this.response.length;this.i++){
  this.rest.post(this.response[this.i]);
}


console.log(this.rest.all);
  }
 
 
 

  goTo(page, params){
		this.navCtrl.push(page,{params: params});
	}
  


  loadDeveloperData() {
    this.databaseprovider.getAllDevelopers().then(data => {
      this.response = data;
      console.log(this.response);
    })
  }
  share(){
    this.message="{{response[ranno].text}}";
    this.socialSharing.share(this.message)
    .then(()=>{

    }).catch(()=>{

    });
  }
  

}
