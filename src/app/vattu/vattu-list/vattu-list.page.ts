import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/service/AlertService';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
import { VattuService } from 'src/app/service/vattu.service';
import { VattuCreatePage } from '../vattu-create/vattu-create.page';

@Component({
  selector: 'app-vattu-list',
  templateUrl: './vattu-list.page.html',
  styleUrls: ['./vattu-list.page.scss'],
})
export class VattuListPage implements OnInit {
  listData: any = [];
  listDataSearch: any = [];
  listVattu: any = [];
  page: string = '';
  listExist: any = [];
  timeout: any = '';
  sumThanhTien: number = 0;
  countVattu: number = 0;
  keyword: string = '';
  sendVattu = {
    "loainx": "''",
    "khohang": "",
    "banggia": ""
  }
  pageInfo = {
    'page': 1,
    'pageSize': 20,
    'keyword': "",
  }
  makho: string = '';
  countIndex: number = -1;
  displayImg: boolean = false;
  constructor(
    private navController: NavController,
    public actionSheetController: ActionSheetController,
    private LoadingService: LoadingService,
    private AlertService: AlertService,
    private modalController: ModalController,
    private ToastService: ToastService,
    private VattuService: VattuService,
  ) {
    this.getVattu();
    this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');

  }

  ionViewDidEnter() { }

  ngOnInit() { }

  getVattu() {
    this.LoadingService.setValue(true);

    this.VattuService.getVatTu().subscribe((response: any) => {
      this.listVattu = response;
      this.countVattu = response.length;

      this.listDataSearch = response;
      this.getSandVT();
      this.LoadingService.setValue(false);
      this.getNhomVattu();
    }, (error) => {
      this.LoadingService.setValue(false);
      console.log('error', error);
    });
  }

  getSandVT() {
    var listItem = this.listVattu.slice(0, this.pageInfo.page * this.pageInfo.pageSize);
    // console.log('this.listExist333333', this.listExist);
    // console.log('this.listItem54444444', listItem);

    // this.listExist.forEach(function (a) {

    //   a.HanDung = a.HanDung == '1900-01-01' ? "" : a.HanDung;

    //   var index = listItem.findIndex(function (b) {
    //     return b.MaVT == a.MaVT && b.LoHang == a.LoHang;
    //   });
    //   if (index !== -1) {

    //     listItem[index].check = true;
    //     listItem[index].LoHang = a.LoHang ? a.LoHang : "";
    //     listItem[index].HanDung = a.HanDung;
    //     listItem[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
    //   }
    // });
    this.listData = listItem;
    // console.log('this.listData', this.listData);
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

  getNhomVattu() {
    var NhomVT = [];
    var DVT = [];
    var HangSanXuat = [];
    var NuocSanXuat = [];

    for (let i = 0; i < this.listData.length; i++) {
      if (this.listData[i].NhomVT) {
        NhomVT.push(this.listData[i].NhomVT);
      }
      if (this.listData[i].DVT) {
        DVT.push(this.listData[i].DVT);
      }
      if (this.listData[i].HangSanXuat) {
        HangSanXuat.push(this.listData[i].HangSanXuat);
      }
      if (this.listData[i].NuocSanXuat) {
        NuocSanXuat.push(this.listData[i].NuocSanXuat);
      }
    }
    NhomVT = [...new Set(NhomVT)]
    DVT = [...new Set(DVT)]
    HangSanXuat = [...new Set(HangSanXuat)]
    NuocSanXuat = [...new Set(NuocSanXuat)]

    localStorage.setItem('NhomVT', JSON.stringify(NhomVT));
    localStorage.setItem('DVT', JSON.stringify(DVT));
    localStorage.setItem('HangSanXuat', JSON.stringify(HangSanXuat));
    localStorage.setItem('NuocSanXuat', JSON.stringify(NuocSanXuat));
  }

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
          if (o.TenVT.toLowerCase().includes($this.pageInfo.keyword.toLowerCase()) == true) {
            arrPlan.push($this.listDataSearch[i]);
          }
        });

        // $this.listExist.forEach(function (a) {
        //   var index = arrPlan.findIndex(function (b) {
        //     return b.MaVT == a.MaVT;
        //   });
        //   if (index !== -1) {
        //     arrPlan[index].check = true;
        //     arrPlan[index].LoHang = a.LoHang ? a.LoHang : "";
        //     arrPlan[index].HanDung = a.HanDung == '1900-01-01' ? "" : a.HanDung;
        //     arrPlan[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
        //   }
        // });
        $this.countVattu = arrPlan.length;
        $this.listData = arrPlan;

        // console.log(' $this.listDataSearch ',$this.listDataSearch );
        // console.log(' $this.listData ',  $this.listData );

      }, 1000);
    }
  }

  getItem(item) {
    this.listData.find((o, i) => {
      if (o.VatTuID == item.VatTuID) {
        this.listData[i]['checkHover'] = true;
      } else {
        this.listData[i]['checkHover'] = false;
      }
    });
  }



  async handleItem(item) {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: [
        {
          text: 'Sửa vật tư',
          icon: 'create-outline',
          handler: () => {
            this.addItem('false', item);
          }
        },
        {
          text: 'Xóa vật tư',
          cssClass: 'buttonSheetDelete',

          icon: 'trash',
          handler: () => {
            this.deleteUnit(item.VatTuID);
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
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  async addItem(isCreate, item?) {

    const modal = await this.modalController.create({
      component: VattuCreatePage,
      // cssClass: 'halfModal',
      componentProps: {
        "isCreate": isCreate,
        "vatTuId": item ? item.MaVT : ''
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


  deleteUnit(id) {
    this.AlertService.presentAlert(`Xác nhận xóa vật tư?`).then(res => {
      if (res == 'true') {
        this.LoadingService.setValue(true);
        this.VattuService.deleteVattu(id).subscribe((response: any) => {
          var res = JSON.parse(response._body);
          console.log('response', response);

          if (res.code == 0) {
            this.ToastService.successToast('Xóa vật tư thành công!');
            this.getVattu();

          } else {
            this.ToastService.errorToast(res.message);
          }
          this.LoadingService.setValue(false);

        }, (error) => {
          setTimeout(() => {
            this.LoadingService.setValue(false);
            console.log('error', error);
          }, 1000);
        });
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

  closeModal() {
    this.navController.navigateBack(['tabs/tab3']);
  }
}
