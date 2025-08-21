import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FunctionService } from '../function.service';
import _ from 'lodash'
@Component({
  selector: 'app-tonkho',
  templateUrl: './tonkho.page.html',
  styleUrls: ['./tonkho.page.scss'],
})
export class TonkhoPage implements OnInit {

  TabIndex: number = 1;
  UserName: string = "";

  Keyword: string = "";
  currentPage: number = 0;
  pageSize: number = 20;
  totalRecord: number = 0;
  totalPage: number = 0;

  tuNgay: string = new Date().toISOString();
  BillData: Observable<any>;
  Bill: Array<{ MaVT: string, TenVT: string, LuongTon: number, DVT: string }>;
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

  constructor(
    public Function: FunctionService,
    public router: Router,
  ) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getData();
  }
  getData() {
    let officeId = localStorage.getItem("officeId")
    this.BillData = this.Function.getTongHopTonKho(officeId, this.tuNgay, this.Keyword)
    if (this.BillData != null) {
      this.BillData.subscribe(data => {
        this.Bill = data;
        this.BillAll = this.Bill;
      })
    }
  }

  loadData(event) {

  }

  openDetail(id) {

  }

  filterInfo(pid: any) {
    let val = pid.target.value;
    if (val && val.trim() != '') {
      this.Bill = _.values(this.BillAll);
      this.Bill = this.Bill.filter((info) => {
        return (
          info.TenVT.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1
          || info.MaVT.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1
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
