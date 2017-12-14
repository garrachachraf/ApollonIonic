import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventService } from './event.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AuthenticationService } from '../../app/authentication/authentication.service';
import { Event } from '../../app/shared/model/event.model';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-event",
  templateUrl: "event.html",
  providers: [EventService]
})
export class EventPage {
  parameter1: number;
  isAuthenticated: boolean;
  event: Event;
  events: Event[];
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationService: AuthenticationService,
    private eventService: EventService
  ) {
    this.parameter1 = navParams.get("eventId");
  }

  ionViewDidLoad() {
    this.eventService.getOne(this.parameter1).subscribe(res => {
      console.log("maan");
      this.event = res;
      console.log(this.event);
    });
    this.eventService.getAll().subscribe(result => {
      this.events = result ;
    })

    console.log("ionViewDidLoad EventPage");
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "Loading events..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  subscribeAuth() {
    this.authenticationService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    this.eventService.getOne(this.parameter1).subscribe(res => {
      console.log("yooo");
      this.event = res;
      console.log(this.event);
    });
  }
}
