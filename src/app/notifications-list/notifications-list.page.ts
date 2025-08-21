import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { FunctionService } from '../function.service';
import _ from 'lodash'
import { ModalController } from '@ionic/angular';
import { NotificationsDetailPage } from '../notifications-detail/notifications-detail.page';
@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.page.html',
  styleUrls: ['./notifications-list.page.scss'],
})
export class NotificationsListPage {


  TabIndex: number = 1;
  tuNgay: string = new Date().toISOString();
  denNgay: string = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
  Keyword: string = "";
  lstThongBao: Array<{
    GPPThongBaoID: number,
    TieuDe: string,
    NoiDung: string,
    CreatedTime: string,
    DanhSachDuongDanTep: string,
    MaCoSo: string,
    MaThongBao: string,
    NgayGui: string,
    NoiGui: string
  }>
  lstThongBaoAll: any;
  constructor(public navCtrl: NavController,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public Function: FunctionService,
    private modalController: ModalController,
    private navController: NavController,
    public platform: Platform) {
  }

  getThongBaoGPP() {
    let data = this.Function.getThongBao()
    data.subscribe(rs => {
      console.log(rs);
      this.lstThongBao = rs;
      this.lstThongBaoAll = this.lstThongBao;
      for (let i = 0; i <= this.lstThongBao.length - 1; i++) {
        let item = this.lstThongBao[i];
        if (item.NoiDung.length > 50) {
          item.NoiDung = item.NoiDung.substring(0, 50) + "...";
        }
      }
    })
  }

  filterInfo(pid: any) {
    const val: string = pid.target.value;
    console.log(val)
    if (val && val.trim() != '') {
      this.lstThongBao = _.values(this.lstThongBaoAll);
      this.lstThongBao = this.lstThongBao.filter((info) => {
        return (
          info.NoiDung.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
      })
    }
    else {
      this.lstThongBao = this.lstThongBaoAll;
    }
  }

  viewDetail(ChungTuID: any) {
    var item = {
      "nftID": ChungTuID,
    }
    this.navController.navigateBack(['notifications-detail'], {
      queryParams: item
    });
  }

  ionViewDidEnter() {
    this.getThongBaoGPP();

  }

  openBack() {
    this.router.navigateByUrl("tabs/tab3");
  }

  openTab(_tabIndex) {
    this.TabIndex = _tabIndex;
  }

}
