import { Component } from '@angular/core';
import { PeopleService } from '../../providers/people-service';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 	 error: string;
 	 auth: any;

	constructor(public peopleService: PeopleService, public navCtrl: NavController){
    	this.auth = AuthService;
	}

	 

}
