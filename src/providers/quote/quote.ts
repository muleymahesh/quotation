import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the QuoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuoteProvider {

  

  private QUOTE_KEY: string = 'quote';

  quote: any[] = [];
  _readyPromise: Promise<any>;

  constructor(public http: HttpClient,public storage: Storage) {
    console.log('Hello QuoteProvider Provider');
  }

  add(product1: any){
    let tmp = {
      quantity: product1.quantity,
      name: product1.product_name,
      images: product1.imgs[0].img_url,
      p_id: product1.p_id,
      price: product1.mrp,
      discount:product1.per_discount,
     // regular_price: product1.regular_price,
      on_sale: product1.offer_name,
      in_stock: product1.status,
      // attributes: product.attributes,
      // variation_id: product.variation_id
    }

    this.quote.push(tmp);
   
    return this.save();
    
  }

  save(){
    return this.storage.set(this.QUOTE_KEY, this.quote);
  }

}
