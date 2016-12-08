import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BarcodePage } from '../pages/barcode/barcode';
import { LoginService } from '../providers/login-service'
import { AuthService } from '../providers/auth'
import { PeopleService } from '../providers/people-service'
import { BarcodeService } from '../providers/barcode-service'
import { MainPipe } from "../../pipes/main-pipe.module";
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    BarcodePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MainPipe
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    BarcodePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler }, AuthService, LoginService, PeopleService, BarcodeService, {
      provide: AuthHttp,
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig, http);
      },
      deps: [Http]
    }]
})
export class AppModule {}
