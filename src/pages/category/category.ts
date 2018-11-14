import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
response:any;
  constructor(public navCtrl: NavController, private storage: Storage,) {

this.response=
    [
      {
      "cat_id":1,
      "category_name":"Family & Frindship",
      "img_name":"friendsgrouplogo.jpg"
      },
      {
      "cat_id":2,
      "category_name":"Wisdom",
      "img_name":"Wisdom.jpg"
      },
      {
      "cat_id":3,
      "category_name":"Love",
      "img_name":"love.jpg"
      },
      {
      "cat_id":4,
      "category_name":"Work & Sucess",
      "img_name":"success.jpg"
      },
      {
      "cat_id":5,
      "category_name":"Undefined",
      "img_name":"undefine.jpg"
      }
      ];
      console.log(this.response);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  goTo(page, params){
		this.navCtrl.push(page,{params: params});
	}

}
