import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { App, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,app: App, public menuCtrl: MenuController) { }

  // Only enables right side menu for this page. Testing purposes.


}
