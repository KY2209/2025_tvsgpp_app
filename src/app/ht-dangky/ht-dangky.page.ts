import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ht-dangky',
  templateUrl: './ht-dangky.page.html',
  styleUrls: ['./ht-dangky.page.scss'],
})
export class HtDangkyPage implements OnInit {

  constructor(public navCtrl: NavController,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public platform: Platform) {

  }

  ngOnInit() {
  }

  openBack() {
    this.router.navigateByUrl("sys-home");
  } 

}
