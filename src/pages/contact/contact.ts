import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {User} from "../../app/shared/model/user.module";
import {HttpClient} from "@angular/common/http";
//import {FollowService} from "../../app/user/follow/follow.service";
import {ShowroomService} from "../showrooms/shared/showroom.service";
import {Showroom} from "../../app/shared/model/showroom.model";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit  {

  constructor(public navCtrl: NavController ,  private http: HttpClient  , private showroomservice: ShowroomService) {

  }
  followers: User[];
  followersNbr: number;
  showrooms: Showroom[];
  user: User = JSON.parse(localStorage.getItem('currentUser'));
  ngOnInit() {
    //this.getFollowers();
    this.getmyShowrooms();

  }

  /*getFollowers(){
    this.followService.getFollowings(this.user.id).subscribe(
      res => {
        this.followers = res;
      }
    );
  }
*/
  getmyShowrooms(){
    this.showroomservice.getByArtistId(this.user.id).subscribe(
      res => {
        this.showrooms = res;
      }
    );
  }
}
