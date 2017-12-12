import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationService } from '../../app/authentication/authentication.service';
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  userCredentials = { username: "", password: "" };
   isAuthenticated: boolean = false;
  currentUser: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authenticationService: AuthenticationService
  ) {}
  logForm() {
    console.log(this.userCredentials);
  }
  ionViewDidLoad() {
    this.subscribeAuth();
    this.checkAuthentication();
  }
  login() {
    this.authenticationService.login(this.userCredentials).subscribe(
      res => {
        res => this.authenticationService.isAuthenticated(true);
        this.currentUser = this.authenticationService.getToken();
        console.log(this.currentUser);
        this.navCtrl.push(TabsPage);
      },
      res => this.authenticationService.isAuthenticated(false)
    );
  }



  logout() {
    this.authenticationService.logout();
  }

  // cheks if there is a valid token
  checkAuthentication() {
    if (this.authenticationService.getToken()) {
      this.authenticationService.checkToken().subscribe(
        res => {
          this.isAuthenticated = true;
          this.currentUser = this.authenticationService.getToken();
          this.authenticationService.isAuth = true;
        },
        error => {}
      );
    }
  }


  // subscribe to the isAuthenticated observable
  subscribeAuth() {
    this.authenticationService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }
}
