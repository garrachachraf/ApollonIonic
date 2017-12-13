import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowroomsPage } from './showrooms';

@NgModule({
  declarations: [
    ShowroomsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowroomsPage),
  ],
})
export class ShowroomsPageModule {}
