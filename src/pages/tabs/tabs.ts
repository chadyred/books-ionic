import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { BarcodePage } from '../barcode/barcode';
import { AuthService } from '../../providers/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
 	 auth: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LoginPage;
  tab2Root: any = BarcodePage;

  constructor() {
  	this.auth = AuthService
  }
}
