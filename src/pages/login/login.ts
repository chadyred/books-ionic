import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../providers/login-service';
import { JwtHelper } from 'angular2-jwt';
import { AuthService } from '../../providers/auth';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	public pseudo: any;
	public password: any;
	user: string;  
    error: string;
	jwtHelper: JwtHelper = new JwtHelper();
    local: any = window.localStorage;
 	auth: any; // Permet de vérifier si on est authentifié ou non

  constructor(public navCtrl: NavController, public loginService: LoginService ) {
	    let token = this.local.getItem('id_token');
	    console.log("TOKEN HERE " + token)
	    if(token) {
	      this.user = this.jwtHelper.decodeToken(token).username;
	    }
	    this.auth = AuthService;
	}

	ionViewDidLoad() {
	console.log('Hello LoginPage Page');
	}


	onSubmit(f: NgForm) {
		console.log('Form submission is ', f.value);
		this.pseudo = f.value.pseudo;
		this.password = f.value.password;
		this.checkLogin();
	}


	checkLogin(){
		this.loginService.login(this.pseudo, this.password)
		.then(	        
			data => this.authSuccess(data.token)
		).catch(error => {
      console.log(error);
    });

	}


  authSuccess(token) {
  	console.log("authSuccess => token => " + token)
    this.error = null;
    this.local.setItem('id_token', token);
  	console.log("authSuccess => local storage id_token => " + this.local.getItem('id_token'))
    this.user = this.jwtHelper.decodeToken(token).username;
  }

  logout() {
    window.localStorage.removeItem('id_token');
    this.user = null;
  }

}
