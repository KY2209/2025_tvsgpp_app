import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, ModalController, NavController, Platform, ToastController } from '@ionic/angular';
import { FunctionService } from '../function.service';

@Component({
  selector: 'app-notifications-detail',
  templateUrl: './notifications-detail.page.html',
  styleUrls: ['./notifications-detail.page.scss'],
})
export class NotificationsDetailPage {
  Id: any;
  content: any;
  tittle: any;
  constructor(public navCtrl: NavController,
    public router: ActivatedRoute,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public Function: FunctionService,
    private modalController: ModalController,
    private navController: NavController,
    public platform: Platform) {

    this.router.queryParams.subscribe(params => {
      console.log("23", params)
      this.Id = params.nftID;
      this.getThongBao()
    });

  }

  getThongBao() {
    let data = this.Function.getChiTietThongBao(this.Id)
    data.subscribe(rs => {
      console.log(rs);
      this.content = rs[0].NoiDung;
      this.tittle = rs[0].TieuDe;

    })
  }

  openBack() {

    this.navController.navigateBack("notifications-list")
  }


}
