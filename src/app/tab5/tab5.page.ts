import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  TabIndex: number = 1;
  UserName: string = "";
  FullName: string = "";
  hethong: any = {};
  dienthoai: string = "";
  handung: string = "";

  constructor(public navCtrl: NavController,
    public router: Router,
    private storage: Storage,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public platform: Platform) {
    storage.create();
    var hethong = JSON.parse(localStorage.getItem('HeThong') || null);
    for (let i = 0; i < hethong.length; i++) {
      if (hethong[i].INIOption == "inpDienThoai") {
        this.dienthoai = hethong[i].INIValue;
      }
      if (hethong[i].INIKey == "handung") {
        this.handung = hethong[i].INIValue;
      }
    }
  }

  ionViewDidEnter() {
    this.storage.get("gppUser").then(value => {
      this.FullName = value;

    })
  }

  reverseString(str){
    return str.substring(0, 10).split('-').reverse().join('/');
  }

  openDangKyKhamBenh() {
    this.router.navigateByUrl("kh-khambenh-tructuyen");
  }

  openBack() {
    this.router.navigateByUrl("tabs/tab3");
  }

  openSetting(){
    this.navCtrl.navigateBack(['setting']);
  }

  openTab(_tabIndex) {
    this.TabIndex = _tabIndex;
  }

  logout() {
    this.storage.set("User", "");
    this.storage.set("Pass", "")
    this.storage.set("connLink", "");
    localStorage.setItem("objUserName", "");
    this.navCtrl.navigateBack("login");
  }

}
