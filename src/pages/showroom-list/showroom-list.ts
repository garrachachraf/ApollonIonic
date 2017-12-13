import { ShowroomDetailPage } from './../showroom-detail/showroom-detail';
import { WishlistPage } from './../wishlist/wishlist';
import { ShowroomProvider } from './../../providers/showroom/showroom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Showroom } from '../../app/shared/model/showroom.model';
import { SocialSharing } from '@ionic-native/social-sharing';
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
  providers: [SocialSharing]
})
export class ShowroomListPage {

  showrooms:Showroom[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private showroomProvider: ShowroomProvider,
    private socialSharing: SocialSharing
  ) {
  }

  ionViewDidLoad() {
    this.showroomProvider.getAll()
    .subscribe(result => this.showrooms = result);
  }

  shareFb(showroom: Showroom){

    this.socialSharing.shareViaFacebook("Chechout this amazing showroom", showroom.artWorks[0].mediaPath, "test.com")
      .then(()=>{
        console.log("helo fb");
        
      })
  }


  goTo(showroomId: number){
    this.navCtrl.push(ShowroomDetailPage,{id:showroomId});
  }

}
