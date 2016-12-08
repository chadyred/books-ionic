import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { BarcodeService } from '../../providers/barcode-service';

/*
  Generated class for the Barcode page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html'
})
export class BarcodePage {
	public barcode: any;
  public result: any;

  constructor(public barcodeService: BarcodeService, public navCtrl: NavController) {
    this.result = null;
  }

  ionViewDidLoad() {
    console.log('Hello BarcodePage Page');
  }


	onSubmit(f: NgForm) {
		this.barcode = f.value.barcode;
    console.log("Form barcode value : " + this.barcode)
    this.checkExist(f.value.barcode);
    this.result = null;

    f.reset();
	}



  checkExist(barcode){

    this.barcodeService.checkBarcode(barcode)
    .then(data => {
        this.result = data;
    }).catch(error => {
      this.result = null;
      console.log(error);
    });

  }


}
