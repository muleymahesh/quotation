import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  response:any;
  message:string=null;
  file:string=null;
  link:string=null;
  subject:string=null;

  constructor(public navCtrl: NavController, private storage: Storage, private socialSharing: SocialSharing,) {
   //this.response = JSON.stringify(this.myObj);
   this.response=[
    {
    "quote_id":1,
    "quote":"One best book is equal to a hundred good friends, but one good friend is equal to a library.",
    "category_name":"Family and friendship",
    "author_name":"Abdul Kalam"
    },
    
    {
    "quote_id":2,
    "quote":"We have no ability to be equal to all have opportunities equal to their ability lane.",
    "category_name":"Family and friendship",
    "author_name":"Aesop"
    },
    
    {
    "quote_id":3,
    "quote":"To the man who only has a hammer, everything he encounters begins to look like a nail.",
    "category_name":"Wisdom",
    "author_name":"Abraham H. Maslow"
    },
    
    {
    "quote_id":5,
    "quote":"change his awareness of himself.",
    "category_name":"Love",
    "author_name":"Abraham H. Maslow"
    },
    
    {
    "quote_id":6,
    "quote":"It is the brain, the little gray cells on which one must rely. One must seek the truth within--not without..",
    "category_name":"Undefined",
    "author_name":"Agatha Christie"
    }
    
    ];
   console.log(this.response);
  }
 
 
 

  goTo(page, params){
		this.navCtrl.push(page,{params: params});
	}
  
  share(){
    this.message=" Life isn't about getting and having, it's about giving and being.";
    this.socialSharing.share(this.message)
    .then(()=>{

    }).catch(()=>{

    });
  }
  

}
