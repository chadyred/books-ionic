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
import { PeopleService } from '../../providers/people-service';
import { AuthHttp } from 'angular2-jwt';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth';
export var HomePage = (function () {
    function HomePage(peopleService, navCtrl, authHttp) {
        this.peopleService = peopleService;
        this.navCtrl = navCtrl;
        this.authHttp = authHttp;
        this.loadPeople();
        this.auth = AuthService;
    }
    HomePage.prototype.loadPeople = function () {
        var _this = this;
        this.peopleService.load()
            .then(function (data) {
            console.log(data);
            _this.people = data;
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }), 
        __metadata('design:paramtypes', [PeopleService, NavController, AuthHttp])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map