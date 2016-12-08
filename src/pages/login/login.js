var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service';
import { JwtHelper } from 'angular2-jwt';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var LoginPage = (function () {
    function LoginPage(navCtrl, loginService) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.jwtHelper = new JwtHelper();
        this.local = window.localStorage;
        var token = this.local.getItem('id_token');
        console.log(token);
        if (token) {
            this.user = this.jwtHelper.decodeToken(token).username;
        }
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage Page');
    };
    LoginPage.prototype.onSubmit = function (f) {
        console.log('Form submission is ', f.value);
        this.pseudo = f.value.pseudo;
        this.password = f.value.password;
        this.checkLogin();
    };
    LoginPage.prototype.checkLogin = function () {
        var _this = this;
        this.loginService.login(this.pseudo, this.password)
            .then(function (data) { return _this.authSuccess(data.token); }).catch(function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.authSuccess = function (token) {
        this.error = null;
        this.local.setItem('id_token', token);
        this.user = this.jwtHelper.decodeToken(token).username;
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [NavController, LoginService])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map