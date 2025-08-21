import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/service/AlertService';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
import { VattuService } from 'src/app/service/vattu.service';
import { VattuCreatePage } from '../vattu/vattu-create/vattu-create.page';

@Component({
  selector: 'app-tonkho-index',
  templateUrl: './tonkho-index.page.html',
  styleUrls: ['./tonkho-index.page.scss'],
})
export class TonkhoIndexPage implements OnInit {
  listData: any = [];
  listDataSearch: any = [];
  listVattu: any = [];
  page: string = '';
  listExist: any = [];
  timeout: any = '';
  sumThanhTien: number = 0;
  displayImg: boolean = false;
  keyword: string = '';
  pageInfo = {
    'page': 1,
    'pageSize': 20,
    'keyword': "",
  };
  sendItem: any = {
    "officeid": 1,
    "thoidiem": "2024-04-24"
  };
  makho: string = '';
  countIndex: number = -1;
  officeId: number = 0;
  countVattu: number = 0;
  constructor(
    private navController: NavController,
    public actionSheetController: ActionSheetController,
    private LoadingService: LoadingService,
    private AlertService: AlertService,
    private modalController: ModalController,
    private ToastService: ToastService,
    private VattuService: VattuService,
  ) {
    this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');

  }

  ionViewDidEnter() {
    this.sendItem.officeid = Number(localStorage.getItem('officeId'));

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    var nextDate = this.setNumber(currentDate.getDate());
    var nextWeekMonth = this.setNumber(currentDate.getMonth() + 1);
    var nextWeekYear = currentDate.getFullYear();
    this.sendItem.thoidiem = `${nextWeekYear}-${nextWeekMonth}-${nextDate}`;
    this.getVattu();
  }

  ngOnInit() {

  }

  setNumber(n) {
    return n < 10 ? '0' + n : n;
  }

  getVattu() {
    this.LoadingService.setValue(true);

    this.VattuService.getVatTuTonKho(this.sendItem).subscribe((response: any) => {
      // this.VattuService.getVatTuSapHetHan(this.sendItem).subscribe((response: any) => {

      this.countVattu = response.length;
      console.log("78", response)
      this.listVattu = response;
      this.listDataSearch = response;
      this.getSandVT();
      this.LoadingService.setValue(false);
    }, (error) => {
      this.LoadingService.setValue(false);
      console.log('error', error);
    });
  }

  getSandVT() {
    var listItem = this.listVattu.slice(0, this.pageInfo.page * this.pageInfo.pageSize);
    console.log("91", listItem);
    this.listData = listItem;
    for (let i = 0; i <= this.listData.length - 1; i++) {
      let item = this.listData[i];
      if (item.Img != undefined) {
        if (item.Img.includes("http")) {
          // console.log("Tìm thấy rồi")
        }
        else {
          item.Img = "https://" + localStorage.getItem("unit").toString() + ".tvsgpp.net" + item.Img;
          // console.log("101", item.Img);
        }
      }

    }

  };

  onSearch(e: any) {
    var arrPlan = [];
    this.pageInfo.keyword = e.target.value;
    this.pageInfo.page = 1;
    if (!this.pageInfo.keyword) {
      this.deleteSearch();
    } else {
      clearTimeout(this.timeout);
      var $this = this;

      this.timeout = setTimeout(function () {

        $this.listDataSearch.find((o: any, i: any) => {

          if (o.TenVT && o.TenVT.toLowerCase().includes($this.pageInfo.keyword.toLowerCase()) == true) {
            arrPlan.push($this.listDataSearch[i]);
          }
        });

        $this.countVattu = arrPlan.length;
        $this.listData = arrPlan;
      }, 1000);
    }
  }

  getItem(item) {
    this.listData.find((o, i) => {
      if (o.MaVT == item.MaVT) {
        this.listData[i]['checkHover'] = true;
      } else {
        this.listData[i]['checkHover'] = false;
      }
    });
  }



  deleteSearch() {
    this.pageInfo.keyword = '';
    this.pageInfo.page = 1;
    this.getSandVT();
  }

  doInfinite(event) {
    this.pageInfo.page++;
    setTimeout(() => {
      event.target.complete();
      this.getSandVT();
    }, 500);
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: VattuCreatePage,
      // cssClass: 'halfModal',
      componentProps: {
        "isCreate": 'true',
        // "vatTuId": item ? item.MaVT : ''
        // "page": this.page

      }
    });
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.getVattu();
        // this.getUnit('closeModal');
      }
    });
    return await modal.present();
  }

  closeModal() {
    this.navController.navigateBack(['tabs/tab3']);
  }
}
