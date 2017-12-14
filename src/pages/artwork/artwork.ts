import { Artwork } from './../../app/shared/model/artwork.model';
import { AuthenticationService } from './../../app/authentication/authentication.service';
import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArtworkService } from './artwork.service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

/**
 * Generated class for the ArtworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-artwork",
  templateUrl: "artwork.html",
  providers: [ArtworkService]
})
export class ArtworkPage {
  parameter1: number;
  isAuthenticated: boolean;
  artwork: Artwork;
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationService: AuthenticationService,
    private artworkService: ArtworkService
  ) {
    this.parameter1 = navParams.get("artworkId");
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  ionViewDidLoad() {
    this.artworkService.getOne(this.parameter1).subscribe(res => {
      console.log("7ammatik");
      this.artwork = res;
      console.log(this.artwork);
    });

    console.log("ionViewDidLoad ArtworkPage");
  }
  subscribeAuth() {
    this.authenticationService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
    this.artworkService.getOne(this.parameter1).subscribe(res => {
      console.log("7ammatik");
      this.artwork = res;
      console.log(this.artwork);
    });
  }

}
