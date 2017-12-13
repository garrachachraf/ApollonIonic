import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShowroomService } from "./shared/showroom.service";
import { Showroom } from '../../app/shared/model/showroom.model';
import { ArtworkPage } from '../artwork/artwork';

/**
 * Generated class for the ShowroomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-showrooms",
  templateUrl: "showrooms.html",
   providers : [ShowroomService]
})
export class ShowroomsPage {
  showrooms: Showroom[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private showroomService: ShowroomService
  ) {}

  ionViewDidLoad() {
    this.showroomService
      .getAll()
      .subscribe(result => (this.showrooms = result));
    console.log("ionViewDidLoad ShowroomsPage");
  }
 artworkDetail(a:number){
   this.navCtrl.push(ArtworkPage,{
    artworkId:a
});
 }


  goTo(showroomId: number) {
   // this.route.navigate(["showroom/" + showroomId]);
  }
}
