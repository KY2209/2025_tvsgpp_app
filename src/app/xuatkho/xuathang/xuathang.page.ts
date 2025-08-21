import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonInfiniteScroll, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash'
import { ToastController } from '@ionic/angular';
import { FunctionService } from 'src/app/function.service';
import { XuathangAddnewPage } from '../xuathang-addnew/xuathang-addnew.page';
import { XuatkhoService } from 'src/app/service/xuatkho.service';
import { AlertService } from 'src/app/service/AlertService';
import { LoadingService } from 'src/app/service/loading.service';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ToastService } from 'src/app/service/toastService';
@Component({
  selector: 'app-xuathang',
  templateUrl: './xuathang.page.html',
  styleUrls: ['./xuathang.page.scss'],
})
export class XuathangPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  UserName: string = "";
  Keyword: string = "";
  currentPage: number = 0;
  sendData = {
    "officeid": "1",
    "tu_ngay": "2023-12-01T15:33:02.835+07:00",
    "den_ngay": "2023-12-23T08:33:02.835Z",
    "dieukien": ""
  }
  listItem: any = [];
  listItemSearch: any = [];
  sendChungtu: any = {
    "nam_du_lieu": "2023",
    "loaictid": 2
  }
  timeout: any = '';
  title: string = '';
  keyword: string = '';
  ChungTuInfo: any = {};
  countItem: number = 0;
  sumTT: number = 0;
  checkCalender: boolean = false;
  checkSearch: boolean = false;

  constructor(
    public Function: FunctionService,
    public router: Router,
    public route: ActivatedRoute,
    public toastController: ToastController,
    private modalController: ModalController,
    private XuatkhoService: XuatkhoService,
    private actionSheetController: ActionSheetController,
    private AlertService: AlertService,
    private LoadingService: LoadingService,
    private navController: NavController,
    private printer: Printer,
    private ToastService: ToastService
  ) {

    this.route.queryParams.subscribe(params => {
      this.sendChungtu.loaictid = params.LoaiCTID;
      this.title = params.DienGiai;
    });
    this.sendChungtu.nam_du_lieu = new Date().getFullYear().toString();

    // var currentDate = new Date();
    // var month = currentDate.getMonth();
    // var year = currentDate.getFullYear();

    // var nextMonthDate = new Date(year, month + 1, 1);
    // // Giảm đi 1 ngày từ ngày đầu tiên của tháng tiếp theo để lấy ngày cuối cùng của tháng hiện tại
    // var lastEndOfMonth = new Date(nextMonthDate.getTime() - 1);
    // const dayEnd = lastEndOfMonth.getDate();

    // var newMonth = this.convDate(month + 1);
    // this.sendData.tu_ngay = `${year}-${newMonth}-01`;
    // this.sendData.den_ngay = `${year}-${newMonth}-${dayEnd}`;


  }

  ngOnInit() {
    this.getData();
  }

  print() {
    var myDiv = document.getElementById("myDiv");
    var divContent = myDiv.outerHTML;

    this.printer.isAvailable().then((onsuccess: any) => {

      let options: PrintOptions = {

      };
      this.printer.print(divContent, options).then((value: any) => {
        console.log('value:', value);
      }, (error) => {
        console.log('error:', error);
      });

    }, (err) => {
      console.log('Error', err);
    })
  }

  convDate(number) {
    return number < 10 ? `0${number}` : number;
  }

  getData() {
    console.log('this.sendChungtu', this.sendChungtu);

    this.LoadingService.setValue(true);
    this.XuatkhoService.getChungtu(this.sendChungtu).subscribe((response: any) => {
      this.listItem = response;
      this.listItemSearch = response;
      this.countItem = response.length;
      this.sumMoney();
      // console.log('response123', response);
      this.LoadingService.setValue(false);

    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
        this.LoadingService.setValue(false);

      }, 1000);
    });

  }

  sumMoney() {
    this.sumTT = 0;
    for (let i = 0; i < this.listItem.length; i++) {
      this.sumTT = this.sumTT + this.listItem[i].TongTien;
    }
  }


  async openModal(isCreate, ChungTuID?, ThoiDiem?) {
    var item = {
      "isCreate": isCreate,
      "ChungTuID": ChungTuID,
      "nam_du_lieu": ThoiDiem?.slice(0, 4),
      "DienGiai": this.title,
      "LoaiCTID": this.sendChungtu.loaictid
    }

    if(this.title == "Xuất bán lẻ"){
      this.navController.navigateBack(['xuathang-addnew'], {
        queryParams: item
      });
    }else if(this.title == "Nhập mua"){
      this.navController.navigateBack(['nhaphang-update'], {
        queryParams: item
      });
    }
    
  }

  async presentActionSheet(ChungTuID, ThoiDiem) {

    var listBtn = [
      
      {
        text: 'Chi tiết',
        icon: 'document-attach-outline',
        handler: () => {
          this.openDetail(ChungTuID, String(ThoiDiem));
        },
      },
      {
        text: 'Sửa phiếu',
        icon: 'create-outline',
        handler: () => {
          this.openModal(false, ChungTuID, String(ThoiDiem));
        },
      },
      {
        text: 'Xóa phiếu',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.confirmDelete();
        },
      },

    ]

    if(this.title == "Xuất bán lẻ"){
      var print = {
        text: 'In phiếu',
        icon: 'print-outline',
        handler: () => {
          this.print();
        },
      }
      listBtn.splice(0, 0, print);
    }

    this.ChungTuInfo = {
      "ChungTuID": ChungTuID,
      "nam_du_lieu": ThoiDiem?.slice(0, 4),
    }
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: listBtn
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  confirmDelete() {
    this.ChungTuInfo.ChungTuID = String(this.ChungTuInfo.ChungTuID);
    
    this.AlertService.presentAlert(`Xác nhận xóa phiếu?`).then(res => {
      if (res == 'true') {
        this.LoadingService.setValue(true);
        this.XuatkhoService.deleteXuatHang(this.ChungTuInfo).subscribe((response: any) => {
          var res = JSON.parse(response._body);
          if (res.code == 200) {
            this.ToastService.successToast(res.message);
            this.getData();
          } else {
            this.ToastService.errorToast(res.message);
          }
          this.LoadingService.setValue(false);

        }, (error) => {
          setTimeout(() => {
            console.log('error', error);
          }, 1000);
        });
      }
    });
  }

  onSearch(e: any) {
    var arrPlan = [];
    this.keyword = e.target.value;

    if (!this.keyword) {
      arrPlan = this.listItemSearch;
    } else {
      clearTimeout(this.timeout);
      var $this = this;

      this.timeout = setTimeout(function () {

        $this.listItemSearch.find((o: any, i: any) => {
          if (o.SoCT.toLowerCase().includes($this.keyword.toLowerCase()) == true) {
            arrPlan.push($this.listItemSearch[i]);
          }
        });
        $this.listItem = arrPlan;
        $this.countItem = arrPlan.length;
      }, 1000);
    }
  }

  deleteSearch() {
    this.sendData.dieukien = '';
  }

  changeYear(year) {
    this.sendChungtu.nam_du_lieu = year.slice(0, 4);
    this.getData();
  }

  openDetail(ChungTuID, ThoiDiem) {
    var item = {
      "ChungTuID": ChungTuID,
      "nam_du_lieu": ThoiDiem?.slice(0, 4),
      "DienGiai": this.title,
      "LoaiCTID": this.sendChungtu.loaictid
    }
    this.navController.navigateBack(['xuathang-detail'], {
      queryParams: item
    });
  }

  openBack() {
    this.navController.navigateBack(['tabs/tab3'])
    // this.router.navigateByUrl("tabs/tab3");
  }

}
