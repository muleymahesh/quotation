import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthordetailPage } from './authordetail';

@NgModule({
  declarations: [
    AuthordetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthordetailPage),
  ],
})
export class AuthordetailPageModule {}
