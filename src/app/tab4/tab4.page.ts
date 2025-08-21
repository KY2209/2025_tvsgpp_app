import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { FunctionService } from '../function.service';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  TabIndex: number = 1;
  tuNgay: string = new Date().toISOString();
  denNgay: string = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
  Keyword: string = "";
  lstThongBaoGPP: Array<{
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
  constructor(public navCtrl: NavController,
    public router: Router,
    public loadingController: LoadingController,
    public toastController: ToastController,
    public Function: FunctionService,
    public platform: Platform) {
  }

  getThongBaoGPP() {
    let officeId = localStorage.getItem("officeId")
    this.tuNgay = "2020-01-01";
    this.denNgay = "2023-12-30";
    let data = this.Function.getThongBaoGPP(officeId, this.tuNgay, this.denNgay, this.Keyword)
    data.subscribe(rs => {
      console.log(rs);
      this.lstThongBaoGPP = rs;
    })
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

  openFile(file: any) {
    file = file.substring(6, file.length);
    file = file.substring(file.length - 1, 0)
    file = file.replace('"', '')
    console.log("66", file)
    if (this.platform.is('android')) {
      // alert("Vui lòng cập nhật ứng dụng !");
      window.open(file, '_system', 'location=yes');
    }
    else if (this.platform.is('ios')) {
      //alert("Vui lòng cập nhật ứng dụng !");
      window.open(file, '_self');
    }
  }
}
