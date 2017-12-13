import { Wishlist } from './../../app/shared/model/wishlist.model';
import { WishlistProvider } from './../../providers/wishlist/wishlist';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Artwork } from '../../app/shared/model/artwork.model';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {

  wishlist: Wishlist ={"artWorks":[],"total":null};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private wishlistProvider: WishlistProvider,
    public toastCtrl: ToastController  
  ) {
  }

  ionViewDidLoad() {
    this.getWishlist();
    console.log('ionViewDidLoad WishlistPage');
  }
  getWishlist(){
    this.wishlistProvider.getWishlist().subscribe(
      res =>{
        this.wishlist = res
        this.getTotal();
        }
      )
  }
  getTotal(){
    this.wishlistProvider.getTotal().subscribe(
      res=>{
        this.wishlist.total=res;
      }
    )
  }
  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  removeItem(artwork: Artwork){
    this.wishlistProvider.removeItem(artwork.id).subscribe(
      res =>{
        this.wishlist.artWorks = this.wishlist.artWorks.filter(
        item => item.id != artwork.id
        )
        this.wishlist.total = this.wishlist.total - artwork.price;
        this.presentToast('Artwork removed !');
      }
    )
  }
  

}
