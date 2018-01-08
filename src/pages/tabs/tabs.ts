import { ShowroomsPage } from './../showrooms/showrooms';
import { ShowroomListPage } from './../showroom-list/showroom-list';
import { WishlistPage } from './../wishlist/wishlist';
import { Component } from '@angular/core';
import { App, MenuController } from 'ionic-angular';
//import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
import { EventPage } from '../event/event';
import {GalleriesPage} from "../galleries/galleries";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = ShowroomsPage;
  tab2Root = ShowroomListPage;
  tab3Root = ContactPage;
  tab4Root = WishlistPage;
  tab5Root = EventPage;
  tab6Root = GalleriesPage;

  constructor(app: App, menu: MenuController) { }
}
