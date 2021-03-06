import { ArtworkPage } from './../pages/artwork/artwork';
import { ShowroomsPage } from './../pages/showrooms/showrooms';
import { ShowroomDetailPage } from './../pages/showroom-detail/showroom-detail';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AuthenticationService } from './authentication/authentication.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './authentication/token.interceptor';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WishlistPage } from '../pages/wishlist/wishlist';
import { WishlistProvider } from '../providers/wishlist/wishlist';
import { ShowroomProvider } from '../providers/showroom/showroom';
import { ShowroomListPage } from '../pages/showroom-list/showroom-list';
import {LoginPageModule} from "../pages/login/login.module";
import {ArtworkPageModule} from "../pages/artwork/artwork.module";
import {ShowroomsPageModule} from "../pages/showrooms/showrooms.module";
import {WishlistPageModule} from "../pages/wishlist/wishlist.module";
import {ShowroomListPageModule} from "../pages/showroom-list/showroom-list.module";
import {ShowroomDetailPageModule} from "../pages/showroom-detail/showroom-detail.module";
import {AuthenticationComponent} from "./authentication/authentication.component";
import {PageNotFoundComponent} from "./shared/not-found.component";
import { EventPage } from '../pages/event/event';
//import {FollowService} from "../user/follow/follow.service";
//import {FollowComponent} from "./user/follow/follow.component";
import {ShowroomService} from "../pages/showrooms/shared/showroom.service";
import { AgmCoreModule } from '@agm/core';
import {Keyboard} from '@ionic-native/keyboard';
import {GalleriesPage} from "../pages/galleries/galleries"
import {AutocompleteModalPage} from "../pages/autocomplete-modal/autocomplete-modal"
import {PrettyJsonModule} from 'angular2-prettyjson';
import {GalleryProvider} from "../providers/galleries/galleries";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PageNotFoundComponent,
    AuthenticationComponent,
    EventPage,
    AutocompleteModalPage,
    GalleriesPage


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    ArtworkPageModule,
    ShowroomsPageModule,
    WishlistPageModule,
    ShowroomListPageModule,
    ShowroomDetailPageModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxzZBbmKANs1lD8-rwULOgKGcXjkK7jTs',
      libraries: ['places']
    }),
    PrettyJsonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    ShowroomsPage,
    ArtworkPage,
    WishlistPage,
    ShowroomListPage,
    ShowroomDetailPage,
    EventPage,
    GalleriesPage,
    AutocompleteModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler,},
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
    AuthenticationService,
    WishlistProvider,
    ShowroomProvider,
    ShowroomService,
   // FollowService,
    AuthenticationService,
    GalleryProvider
  ]
})
export class AppModule {}
