import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatdetailsPage } from './catdetails';

@NgModule({
  declarations: [
    CatdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CatdetailsPage),
  ],
})
export class CatdetailsPageModule {}
