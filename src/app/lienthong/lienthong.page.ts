import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FunctionService } from '../function.service';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { IonInfiniteScroll } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-lienthong',
  templateUrl: './lienthong.page.html',
  styleUrls: ['./lienthong.page.scss'],
})
export class LienthongPage {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  UserName: string = "";

  Keyword: string = "";
  currentPage: number = 0;
  pageSize: number = 20;
  totalRecord: number = 0;
  totalPage: number = 0;
  LienthongData: Observable<any>;
  checkSearch: boolean = false;
  thoiGian: any;
  slideOpts = {
    initialSlide: 1,
    speed: 500,
    loop: true
  };

  searchData: any = {
    keyword: '',
    fromDay: '2024-01-01',
    toDay: '2024-12-31'
  }

  constructor(
    public navCtrl: NavController,
    public router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
    public Function: FunctionService,
    private storage: Storage,
    public datePipe: DatePipe) {
    storage.create()


  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.thoiGian = new Date().toISOString();
    this.getDoiSoatLienThongGPP();
  }


  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  getDoiSoatLienThongGPP() {
    let officeId = localStorage.getItem("officeId")
    let data = this.Function.getDoiSoatLienThongGPP(officeId)
    data.subscribe(rsLT => {
      this.LienthongData = rsLT.root;
      console.log(this.LienthongData)
    })
  }

  changeDay(time, type) {
    this.searchData[type] = this.sendChungtu.nam_du_lieu.slice(0, 4) + time.slice(4, 10);
    sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
    this.search();
  }

  changeYear(year) {
    this.sendChungtu.nam_du_lieu = year.slice(0, 4);
    this.getDoiSoatLienThongGPP();
    this.searchData.fromDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.fromDay.slice(4, 10);
    this.searchData.toDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.toDay.slice(4, 10);
    this.search();
  }

  search() {

  }

  onSearch(e?: any) {
    this.searchData.keyword = e.target.value;
    sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));

    this.search();

  }

  deleteSearch() {
    this.searchData.keyword = '';
    this.search();
  }


  sendChungtu: any = {
    "nam_du_lieu": "2023",
    "loaictid": 2
  }

  openBack() {
    this.router.navigateByUrl("tabs/tab3");
  }

}
