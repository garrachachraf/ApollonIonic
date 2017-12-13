import { ShowroomsPage } from './../showrooms/showrooms';
import { ShowroomListPage } from './../showroom-list/showroom-list';
import { WishlistPage } from './../wishlist/wishlist';
import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = ShowroomsPage;
  tab2Root = ShowroomListPage;
  tab3Root = ContactPage;
  tab4Root = WishlistPage;

  constructor(app: App, menu: MenuController) { }
}
