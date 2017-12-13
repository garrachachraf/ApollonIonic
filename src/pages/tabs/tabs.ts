import { ShowroomListPage } from './../showroom-list/showroom-list';
import { WishlistPage } from './../wishlist/wishlist';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ShowroomListPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = WishlistPage;

  constructor() {

  }
}
