import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutocompleteModalPage } from './autocomplete-modal';

@NgModule({
  declarations: [
    AutocompleteModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AutocompleteModalPage),
  ],
})
export class AutocompleteModalPageModule {}
