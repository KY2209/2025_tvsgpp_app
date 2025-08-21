import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-sys-home',
  templateUrl: './sys-home.page.html',
  styleUrls: ['./sys-home.page.scss'],
})
export class SysHomePage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public platform: Platform) {

  }

  ngOnInit() {
  }

  openLogin(){
    this.router.navigateByUrl("login");
  }

  openDangKy(){
    this.router.navigateByUrl("ht-dangky");
  }

  openTrangChu() {
    this.router.navigateByUrl("tabs");
  }

}
