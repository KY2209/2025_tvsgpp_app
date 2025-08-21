import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FunctionService } from '../../function.service';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import _ from 'lodash'
import { NhaphangAddnewPage } from '../nhaphang-addnew/nhaphang-addnew.page';
@Component({
  selector: 'app-nhaphang',
  templateUrl: './nhaphang.page.html',
  styleUrls: ['./nhaphang.page.scss'],
})
export class NhaphangPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  TabIndex: number = 1;
  UserName: string = "";

  Keyword: string = "";
  currentPage: number = 0;
  pageSize: number = 20;
  totalRecord: number = 0;
  totalPage: number = 0;

  tuNgay: string = new Date().toISOString();
  denNgay: string = new Date(new Date().getTime() + (1 * (1 * 24 * 60 * 60 * 1000))).toISOString();
  BillData: Observable<any>;
  Bill: Array<{ ChungTuID: string, SoCT: string, NgayCT: string, TongTien: number }>;
  BillAll: any;

  BillFull: Array<{ id: string, createDate: string, totalMoney: number, typeInput: string, wid: string, note: string }>;

  BillDetailData: Observable<any>;
  BillDetail: Array<{
    packet: string, pid: number, productName: string, productUnit: string, productNumber: number
    , productPrice: number, productPrice1: number, productPrice2: number, productMoney: number, productDate: string, productExpiryDate: string, createDate: string, nationalId: string,
    barcode: string, productNumberRate: number
  }>;
  BillDetailAll: any;

  _id: string = "";
  _createDate: string = "";
  _totalMoney: number = 0;
  _note: string = "";

  Message: string = "";

  sendChungtu: any = {
    "nam_du_lieu": "2023",
    "loaictid": 1

  }
  lstChungTu: Array<{ LoaiCTID: string, LoaiNX: string, DienGiai: string }>;
  loaiChungTu: number = 0;
  loaiChungTuAll: any;

  constructor(
    public Function: FunctionService,
    public router: Router,
    public toastController: ToastController,
    private modalController: ModalController
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getLoaiCT();
    this.getData();
  }
  getData() {
    // let officeId = localStorage.getItem("officeId")
    // this.BillData = this.Function.getTongHopNhapKho(officeId, this.tuNgay, this.denNgay, this.Keyword)
    // if (this.BillData != null) {
    //   this.BillData.subscribe(data => {
    //     console.log(data);
    //     this.Bill = data;
    //     this.BillAll = this.Bill;
    //   })
    // }

    this.sendChungtu.nam_du_lieu = new Date().getFullYear().toString();
    this.sendChungtu.loaictid = this.loaiChungTu;
    this.Function.getChungtu(this.sendChungtu).subscribe((response: any) => {
      console.log(response);
      this.Bill = response;
      this.BillAll = this.Bill;

    }, (error) => {
      setTimeout(() => {
        console.log('error', error);

      }, 1000);
    });

  }

  onLoaiCTChange(loaiCT: any) {
    let val = loaiCT.target.value;
    console.log("146", val)
    this.loaiChungTu = Number(val);
    this.getData();
  }

  getLoaiCT() {
    this.Function.getLoaiCT().subscribe(data => {
      let index = data.indexOf(1)
      data.splice(index);
      index = data.indexOf(2);
      data.splice(index);
      data.splice(1, 1);
      console.log("141", data);
      this.lstChungTu = data;
    })
  }

  syncBill(id: any) {
    let data = this.Function.dongboCT(id.toString());
    if (data) {
      data.subscribe(rs => {
        console.log(rs)
        if (rs.code == 200) {
          if (rs.message != "") {
            this.presentToastMsg(rs.message)
          }
        }
        else {
          this.presentToastMsg1(rs.message)
        }
      })
    }
  }

  async addNew() {
    const modal = await this.modalController.create({
      component: NhaphangAddnewPage,
      swipeToClose: true,
      componentProps: {

      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log('dataReturned', dataReturned);

    });
    return await modal.present();
  }

  async presentToastMsg(msg) {
    const toast = await this.toastController.create({
      message: '<center>' + msg + '</center>',
      color: 'success',
      duration: 2000
    });
    toast.present();
  }

  async presentToastMsg1(msg) {
    const toast = await this.toastController.create({
      message: '<center>' + msg + '</center>',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }


  filterInfo(pid: any) {
    const val: string = pid.target.value;
    console.log(val)
    if (val && val.trim() != '') {
      this.Bill = _.values(this.BillAll);
      this.Bill = this.Bill.filter((info) => {
        return (
          info.SoCT.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
      })
    }
    else {
      this.Bill = this.BillAll;
    }
  }

  closeTab() {
    this.TabIndex = 1;
  }

  openTab(_Tabindex) {
    this.TabIndex = _Tabindex;
  }

  openBack() {
    this.router.navigateByUrl("tabs/tab3");
  }



}
