import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

/*
  Generated class for the PeopleService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BarcodeService {
  public data: any;

  constructor(private authHttp: AuthHttp) {
    console.log('Hello BarcodeService Provider');
    this.data = null
  }

  checkBarcode(barcode) {
	  // don't have the data yet
	  return new Promise(resolve => {
	    // We're using Angular HTTP provider to request the data,
	    // then on the response, it'll map the JSON data to a parsed JS object.
	    // Next, we process the data and resolve the promise with the new data.
	    
	    this.authHttp.get('http://localhost:3200/book/ean/' + barcode + "?token=" + window.localStorage.getItem('id_token'))
	      .map(res => res.json())
	      .subscribe(data => {
	        // we've got back the raw data, now generate the core schedule data
	        // and save the data for later reference
	        this.data = data;
	        console.log("BArcode service : " + this.data.title);
	        resolve(this.data);
	      },

    		err => console.log(err)
    	);
	  });
	}
}
