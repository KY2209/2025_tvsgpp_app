import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonInfiniteScroll, ModalController, NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash'
import { ToastController } from '@ionic/angular';
import { FunctionService } from 'src/app/function.service';
import { XuatkhoService } from 'src/app/service/xuatkho.service';
import { AlertService } from 'src/app/service/AlertService';
import { LoadingService } from 'src/app/service/loading.service';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ToastService } from 'src/app/service/toastService';
@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.page.html',
  styleUrls: ['./bill-list.page.scss'],
})
export class BillListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  listItem: any = [];
  listItemSearch: any = [];
  sendChungtu: any = {
    "nam_du_lieu": "2023",
    "loaictid": 2
  }

  searchData: any = {
    keyword: '',
    fromDay: '2024-01-01',
    toDay: '2024-12-31'
  }

  timeout: any = '';
  title: string = '';
  ChungTuInfo: any = {};
  countItem: number = 0;
  sumTT: number = 0;
  checkCalender: boolean = false;
  checkSearch: boolean = false;
  listLoaiCT: any = [];
  CTCurrent: any = {};
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
      this.listLoaiCT = JSON.parse(localStorage.getItem('LoaiCT') || '[]');
      for (let i = 0; i < this.listLoaiCT.length; i++) {
        if(this.listLoaiCT[i].LoaiCTID == params.LoaiCTID){
          this.CTCurrent = this.listLoaiCT[i];
          break;
        }        
      }
    });



    this.sendChungtu.nam_du_lieu = new Date().getFullYear().toString();
    
  }

  ngOnInit() {
    this.getData('start');
    var time = new Date().toISOString()
    this.searchData.fromDay = time;
    this.searchData.toDay = time;
    
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

  getData(start?) {

    this.LoadingService.setValue(true);
    this.XuatkhoService.getChungtu(this.sendChungtu).subscribe((response: any) => {
      this.listItem = response;
      
      this.listItemSearch = response;
      this.countItem = response.length;
      if(start){
        var searchBill  = JSON.parse(sessionStorage.getItem('searchBill') || null);
        if(searchBill){
          console.log('rrrrrrrrrr');
          this.searchData = searchBill;
          
        }
      }
      this.search();

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
      "Type": isCreate,
      "ChungTuID": ChungTuID,
      "nam_du_lieu": ThoiDiem?.slice(0, 4),
      "DienGiai": this.title,
      "LoaiCTID": this.sendChungtu.loaictid,
      "pageParent": 'list',
    }

    if (this.CTCurrent.LoaiNX == "4_1") {
      this.navController.navigateBack(['xuathang-detail'], {
        queryParams: item
      });
    } else if (this.CTCurrent.LoaiNX == "2_1") {
      this.navController.navigateBack(['nhaphang-detail'], {
        queryParams: item
      });
    }

  }

  async presentActionSheet(ChungTuID, ThoiDiem) {
    this.hoverItem(ChungTuID);

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
          this.openModal('edit', ChungTuID, String(ThoiDiem));
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
      {
        text: 'Đóng',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        },
      },
    ]

    if (this.CTCurrent.LoaiNX == "4_1") {
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

  hoverItem(ChungTuID) {
    for (let i = 0; i < this.listItem.length; i++) {
      if (this.listItem[i].ChungTuID == ChungTuID) {
        this.listItem[i].check = true;
      } else {
        this.listItem[i].check = false;
      }
    }
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

  onSearch(e?: any) {
    this.searchData.keyword = e.target.value;
    sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));

    this.search();

  }

  search() {
    var arrPlan = [];
    var arr = [];
    if (this.searchData.keyword) {

      this.listItemSearch.find((o: any, i: any) => {
        if (o.SoCT.toLowerCase().includes(this.searchData.keyword.toLowerCase()) == true || o.TenDV.toLowerCase().includes(this.searchData.keyword.toLowerCase()) == true) {
          arrPlan.push(this.listItemSearch[i]);
        }
      });
    }else{
      arrPlan = this.listItemSearch;
    }
    
    var start = new Date(this.searchData.fromDay.slice(0, 10)).getTime();
    var end = new Date(this.searchData.toDay.slice(0, 10)).getTime();

    for (let i = 0; i < arrPlan.length; i++) {
      var dateItem = new Date(arrPlan[i].ThoiDiem.slice(0, 10)).getTime();

      if (dateItem >= start && dateItem <= end) {
        arr.push(arrPlan[i]);
      }
    }
    this.listItem = arr;
    this.countItem = arr.length;
   
  }


  deleteSearch() {
    this.searchData.keyword = '';
    this.search();
  }

  changeYear(year) {
    this.sendChungtu.nam_du_lieu = year.slice(0, 4);
    this.getData();
    this.searchData.fromDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.fromDay.slice(4, 10);
    this.searchData.toDay = this.sendChungtu.nam_du_lieu.slice(0, 4) + this.searchData.toDay.slice(4, 10);
    this.search();
  }

  changeDay(time, type) {
    this.searchData[type] = this.sendChungtu.nam_du_lieu.slice(0, 4) + time.slice(4, 10);
    sessionStorage.setItem('searchBill', JSON.stringify(this.searchData));
    this.search();
    this.sumMoney();

  }

  openDetail(ChungTuID, ThoiDiem) {
    var item = {
      "ChungTuID": ChungTuID,
      "nam_du_lieu": ThoiDiem?.slice(0, 4),
      "DienGiai": this.title,
      "LoaiCTID": this.sendChungtu.loaictid,
      "Type": "detail"
    }

    if (this.CTCurrent.LoaiNX == "4_1") {
      this.navController.navigateBack(['xuathang-detail'], {
        queryParams: item
      });
    } else if (this.CTCurrent.LoaiNX == "2_1") {
      this.navController.navigateBack(['nhaphang-detail'], {
        queryParams: item
      });
    }

  }

  async openTypeCT() {
    var listBtn = [];
    for (let i = 0; i < this.listLoaiCT.length; i++) {
      listBtn.push({
        text: this.listLoaiCT[i].DienGiai,
        icon: 'medical-outline',
        cssClass: this.CTCurrent.LoaiCTID == this.listLoaiCT[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
        handler: () => {
          this.CTCurrent = this.listLoaiCT[i];
          this.sendChungtu.loaictid = this.listLoaiCT[i].LoaiCTID;
          this.title = this.listLoaiCT[i].DienGiai;
          this.getData();
        },
      })
    }

    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: listBtn
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }

  openBack() {
    sessionStorage.removeItem('searchBill');
    this.navController.navigateBack(['tabs/tab3'])
    // this.router.navigateByUrl("tabs/tab3");
  }

}
