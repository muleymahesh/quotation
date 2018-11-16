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
    this.load();
    console.log('Hello QuoteProvider Provider');
  }

  load() {
  
    return this.storage.get(this.QUOTE_KEY).then((val) => {
      if (val && val.length > 0) {
        this.quote = val;
        return this.quote;
      } else {
        this.save();
      }
    });
  }
  get all() {
    return this.quote;
  }
  post(quote){
    
    this.toQuote(quote);
  }
  toQuote(quote: any){
  
    let exist = false;
    for(let i in this.quote){
     
       if(this.quote[i].text == quote.text){
          // this.cart[i].quantity += qty;
          exist = true;
         // console.log(this.cart);
          break;
      }
    }
 
    if(!exist){
     // product1.quantity = qty;
      this.add(quote);
    }

    this.save();
  }



  add(quote: any){
    let tmp = {
      text: quote.text,
      from: quote.from,
      img_name: quote.img_name,
     }

    this.quote.push(tmp);
   
    return this.save();
    
  }

  save(){
    return this.storage.set(this.QUOTE_KEY, this.quote);
  }

}
