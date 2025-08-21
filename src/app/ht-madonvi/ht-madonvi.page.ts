import { Component } from '@angular/core';
import { Http, Headers, RequestMethod, RequestOptions } from '@angular/http';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FunctionService } from '../function.service';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-ht-madonvi',
  templateUrl: './ht-madonvi.page.html',
  styleUrls: ['./ht-madonvi.page.scss'],
})
export class HtMadonviPage {

  logStatus: boolean = true;
  ORG_CODE: string;

  constructor(private http: Http,
    public navCtrl: NavController,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public Function: FunctionService,
    private storage: Storage,
    public platform: Platform) {
    storage.create();
  }

  ngOnInit() {

  }

  ionViewDidEnter() {

    this.storage.create();
    try {
      this.storage.get("orgCode").then((myValue) => {
        this.ORG_CODE = myValue;

        let objorgCode = {
          orgCode: myValue,
          time: Date.now(),
          expire: Date.now() + 1000 * 6000
        };
        localStorage.setItem("ORGCODE", JSON.stringify(objorgCode));

      });
    }
    catch {

    }

    let objORGCODE = localStorage.getItem("ORGCODE");
    let tempObj = JSON.parse(objORGCODE);
    if (tempObj["ORGCODE"] != null) {
      this.ORG_CODE = tempObj["ORGCODE"];
    }
    if (this.ORG_CODE == null) {
      this.ORG_CODE = "";
    }

    localStorage.setItem("CURR_PAGE", "HtMadonviPage");

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "<center>Mã đơn vị không xác định</center>",
      color: 'danger',
      duration: 3000
    });
    toast.present();
  }
}
