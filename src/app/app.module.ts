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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WishlistPage,
    ShowroomListPage,
    ShowroomDetailPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WishlistPage,
    ShowroomListPage,
    ShowroomDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler,},
    {provide: HTTP_INTERCEPTORS,useClass: TokenInterceptor,multi: true},
    AuthenticationService,
    WishlistProvider,
    ShowroomProvider
  ]
})
export class AppModule {}
