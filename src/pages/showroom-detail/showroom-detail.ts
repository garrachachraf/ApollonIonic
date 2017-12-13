import { ShowroomProvider } from './../../providers/showroom/showroom';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Showroom } from '../../app/shared/model/showroom.model';

/**
 * Generated class for the ShowroomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-showroom-detail',
  templateUrl: 'showroom-detail.html',
})
export class ShowroomDetailPage {

  showroom: Showroom;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private showroomProvider:ShowroomProvider
  ) {
  let id = this.navParams.get('id');
   this.getShowroom(parseInt(id));
 }
 
 getShowroom(showroomId: number){
   this.showroomProvider.getOne(showroomId).subscribe(
     result =>{
       this.showroom= result;
     }
   )
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowroomDetailPage');
  }

}
