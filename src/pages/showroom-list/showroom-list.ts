import { ShowroomDetailPage } from './../showroom-detail/showroom-detail';
import { WishlistPage } from './../wishlist/wishlist';
import { ShowroomProvider } from './../../providers/showroom/showroom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Showroom } from '../../app/shared/model/showroom.model';

/**
 * Generated class for the ShowroomListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showroom-list',
  templateUrl: 'showroom-list.html',
})
export class ShowroomListPage {

  showrooms:Showroom[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private showroomProvider: ShowroomProvider
  ) {
  }

  ionViewDidLoad() {
    this.showroomProvider.getAll()
    .subscribe(result => this.showrooms = result);
  }

  goTo(showroomId: number){
    this.navCtrl.push(ShowroomDetailPage,{id:showroomId});
  }

}
