import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { KhoService } from 'src/app/service/kho.service';
import { LoadingService } from 'src/app/service/loading.service';
import { VattuService } from 'src/app/service/vattu.service';
import { DVTComponent } from 'src/app/donvitinh/dvt/dvt.component';

@Component({
  selector: 'app-vattu-index',
  templateUrl: './vattu-index.page.html',
  styleUrls: ['./vattu-index.page.scss'],
})
export class VattuIndexPage implements OnInit {
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
  displayImg: boolean = false;
  countIndex: number = -1;
  constructor(
    private GlobalService: GlobalService,
    private LoadingService: LoadingService,
    private VattuService: VattuService,
    private cdr: ChangeDetectorRef,
    private navParams: NavParams,
    private currencyPipe: CurrencyPipe,
    public popoverController: PopoverController,


  ) {
    this.listVattu = this.navParams.data.listVattu;
    // console.log('this.listVattu', this.listVattu);
    this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');

    // console.log('this.navParams.data.listVattu ==========', this.navParams.data.listVattu);
    // console.log('this.listVattu ============', this.listVattu);


    if (this.listVattu) {
      this.listDataSearch = this.listVattu;
      this.listExist = this.navParams.data.listItem;
      // console.log('this.navParams.data.listItem', this.navParams.data.listItem);
      console.log('this.listExist', this.listExist);
      this.countMoney(this.listExist);

      // console.log('this.listExist', this.listExist);

      this.getSandVT();
    } else {
      this.sendVattu.khohang = this.navParams.data.makho;
      this.sendVattu.banggia = this.navParams.data.banggia;
      this.getVattu();
    }
  }

  ionViewDidEnter() { }

  ngOnInit() { }

  getSandVT() {
    var listItem = this.listVattu.slice(0, this.pageInfo.page * this.pageInfo.pageSize);
    console.log('listItem', listItem);


    for (let i = 0; i < listItem.length; i++) {
      var getVattuTonTai = {
        'index': -1,
        'item': {},
      };

      listItem[i].LoHang = listItem[i].LoHang ? listItem[i].LoHang : '';

      for (let j = 0; j < this.listExist.length; j++) {

        this.listExist[j].LoHang = this.listExist[j].LoHang ? this.listExist[j].LoHang : '';

        if (listItem[i].MaVT == this.listExist[j].MaVT && listItem[i].LoHang == this.listExist[j].LoHang) {
          getVattuTonTai.index = i;
          getVattuTonTai.item = this.listExist[j];
          // console.log('aaaaaaaaaaa', getVattuTonTai.index);

        }
      }
      // console.log('getVattuTonTai.index', getVattuTonTai.index);

      if (getVattuTonTai.index > -1) {
        // console.log('bbbbbbbbbbbbbb', getVattuTonTai.index);

        listItem[i].check = true;
        listItem[i].LoHang = getVattuTonTai.item['LoHang'] ? getVattuTonTai.item['LoHang'] : "";
        listItem[i].HanDung = getVattuTonTai.item['HanDung'];
        // console.log('listItem[i].SoLuong', listItem[i].SoLuong);

        listItem[i].SoLuong = new Intl.NumberFormat().format(getVattuTonTai.item['SoLuong']).replace(/\./g, ',');
      } else {
        listItem[i].check = false;
      }
    }
    this.listData = listItem;
    console.log("118", listItem);
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


  getVattu() {
    this.LoadingService.setValue(true);

    this.VattuService.GetListVT(this.sendVattu).subscribe((response: any) => {
      this.listData = response;
      console.log(this.listData);
      this.countVattu = response.length;
      this.listDataSearch = response;
      this.LoadingService.setValue(false);

    }, (error) => {
      this.LoadingService.setValue(false);
      console.log('error', error);
    });
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
          if (o.TenVT && o.TenVT.toLowerCase().includes($this.pageInfo.keyword.toLowerCase()) == true) {
            arrPlan.push($this.listDataSearch[i]);
          }
        });

        $this.listExist.forEach(function (a) {
          var index = arrPlan.findIndex(function (b) {
            return b.MaVT == a.MaVT;
          });
          if (index !== -1) {
            arrPlan[index].check = true;
            arrPlan[index].LoHang = a.LoHang ? a.LoHang : "";
            arrPlan[index].HanDung = a.HanDung == '1900-01-01' ? "" : a.HanDung;
            arrPlan[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
          }
        });
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

  handleAdd(check, index, item) {

    this.listData[index].check = check;

    if (check == true) {
      this.listData[index].SoLuong = '1';

      this.listExist.push({
        "_TenVT": item.TenVT,
        "ChietKhau": 0,
        "ChietKhau_Percent": 0,
        "DVT": item.DVT,
        "DonGia": item.DonGia,
        "GiaBanLe": item.GiaBanLe ? item.GiaBanLe : 0,
        "GiaBanSy": item.GiaBanSy ? item.GiaBanSy : 0,
        "HTTT": item.HTTT ? item.HTTT : '',
        "HanDung": item.HanDung ? item.HanDung : '',
        "LoHang": item.LoHang ? item.LoHang : '',
        "MaVT": item.MaVT,
        "NhapXuatID": 0,
        "SoLuong": 1,
        "ThanhTien": item.DonGia,
        "TongTien": item.DonGia,
        "VAT": 0,
        "VAT_Percent": 0
      });
      // console.log('aaaaaaaaaa', this.listExist);

    } else {
      this.listExist = this.listExist.filter(x => x.MaVT !== item.MaVT);
      // console.log('bbbbbbbbbb', this.listExist);

    }

    // console.log('sssssssss', this.listExist);

    this.countMoney(this.listExist)

  }

  formatInput(item, MaVT, LoHang, index, type?, e?) {
    // console.log('countIndex', countIndex);
    LoHang = LoHang ? LoHang : '';
    // console.log('LoHang', LoHang);

    if (this.page == 'nhapmua') {
      var checkIndex = this.listVattu.findIndex(x => x.MaVT == MaVT);
      var checkIndexExit = this.listExist.findIndex(x => x.MaVT == MaVT);

    } else {
      var checkIndex = this.listVattu.findIndex(x => x.MaVT == MaVT && x.LoHang == LoHang);
      var checkIndexExit = this.listExist.findIndex(x => x.MaVT == MaVT && x.LoHang == LoHang);

    }

    // console.log('checkIndex', checkIndex, checkIndexExit, this.listVattu[0]);

    // if (type && type == 'plus') {
    //   this.listVattu[checkIndex].SoLuong = String(e + 1);
    // }
    // if (type && type == 'subtraction') {
    //   this.listVattu[checkIndex].SoLuong = String(e - 1);
    // }
    // console.log('this.listVattu[index][item]', this.listVattu[index][item]);


    if (item == 'SoLuong') {
      this.listVattu[checkIndex].SoLuong = String(e);
    }

    // console.log('checkIndex', checkIndex);
    // console.log('this.listVattu', this.listVattu);
    // console.log('this.listVattu[checkIndex]', this.listVattu[checkIndex]);
    // console.log('this.listVattu[checkIndex][item]', this.listVattu[checkIndex][item]);

    var convNumber = this.currencyPipe.transform(this.listVattu[checkIndex][item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')

    this.listVattu[checkIndex][item] = convNumber;
    // console.log('this.listVattu[checkIndex][item]', this.listVattu[checkIndex][item]);
    // console.log('this.listExist[checkIndexExit]', checkIndexExit, this.listExist);

    this.listExist[checkIndexExit][item] = Number(convNumber.replace(/,/g, ''));
    if (item == "DonGia") {
      this.listExist[checkIndexExit].ThanhTien = this.listExist[checkIndexExit].SoLuong * this.listExist[checkIndexExit].DonGia;
      this.listVattu[checkIndex].DonGia = new Intl.NumberFormat().format(this.listExist[checkIndexExit].DonGia).replace(/\./g, ',');
      this.getTongTien(checkIndexExit);
    }

    if (item == "SoLuong") {
      this.listExist[checkIndexExit].ThanhTien = this.listExist[checkIndexExit].SoLuong * this.listExist[checkIndexExit].DonGia;
      this.listVattu[checkIndex].ThanhTien = new Intl.NumberFormat().format(this.listExist[checkIndexExit].ThanhTien).replace(/\./g, ',');
      this.getTongTien(checkIndexExit);
    }
  }

  setItem(item, MaVT, e) {
    var checkIndexExit = this.listExist.findIndex(x => x.MaVT === MaVT);
    this.listExist[checkIndexExit][item] = e;

  }

  getTongTien(index) {
    this.listExist[index].TongTien = this.listExist[index].ThanhTien + this.listExist[index].VAT - this.listExist[index].ChietKhau;
    this.listVattu[index].TongTien = this.listExist[index].TongTien
    this.countMoney(this.listExist);
  }

  countMoney(billDetail) {
    this.sumThanhTien = 0;
    for (let i = 0; i < billDetail.length; i++) {
      this.sumThanhTien = this.sumThanhTien + billDetail[i].ThanhTien;
    }
  }


  handleProduct() {
    // this.GlobalService.closeModal();
    // console.log('end', this.listExist);

    this.GlobalService.closeModalSenData(this.listExist);
  }

  deleteSearch() {
    this.pageInfo.keyword = '';
    this.pageInfo.page = 1;
    // this.listData = this.listDataSearch;
    this.getSandVT();
  }

  async handleDVT(MaVT, DVT, index) {
    const popover = await this.popoverController.create({
      component: DVTComponent,
      cssClass: 'popup-cont-info',
      componentProps: {
        "MaVT": MaVT,
        "DVT": DVT
      },
      translucent: true,

    });
    await popover.present();

    popover.onDidDismiss().then((dataReturned) => {
      // console.log('dataReturned', dataReturned.data);
      if (dataReturned.data) {
        // console.log('this.listData', this.listData);
        // this.listData[index].DVT =  dataReturned.data.DVT;
        // this.listData[index].DonGia =  dataReturned.data.GiaMua;

        for (let i = 0; i < this.listData.length; i++) {
          if (this.listData[i].MaVT == MaVT) {
            this.listData[i].DVT = dataReturned.data.DVT;
            this.listData[i].DonGia = dataReturned.data.GiaMua;
            // this.listData[i].DonGia = new Intl.NumberFormat().format(dataReturned.data.GiaMua).replace(/\./g, ',');
          }
        }

        for (let i = 0; i < this.listExist.length; i++) {
          if (this.listExist[i].MaVT == MaVT) {
            this.listExist[i].DVT = dataReturned.data.DVT;
            this.listExist[i].DonGia = dataReturned.data.GiaMua;
          }
        }

        var checkIndexExit = this.listExist.findIndex(x => x.MaVT === MaVT);

        this.listExist[checkIndexExit].ThanhTien = this.listExist[checkIndexExit].SoLuong * this.listExist[checkIndexExit].DonGia;
        this.listVattu[index].ThanhTien = new Intl.NumberFormat().format(this.listExist[checkIndexExit].ThanhTien).replace(/\./g, ',');
        this.getTongTien(checkIndexExit);

        // this.listExist.forEach(function (a) {
        //   // var index = this.listData.findIndex(function (b) {
        //   //   return b.MaVT == a.MaVT;
        //   // });
        //   if (a.MaVT == MaVT) {
        //     this.listData[index].DVT = dataReturned.data.DVT;
        //   }
        // });
        // this.listData = listItem;
        // this.sendItem.ChiTietHang[index].DVT = dataReturned.data.DVT;
        // this.sendItem.ChiTietHang[index].DonGia = dataReturned.data.GiaMua;
        // this.sendItem.ChiTietHang[index].GiaBanSy = dataReturned.data.GiaBanSy;
        // this.sendItem.ChiTietHang[index].GiaBanLe = dataReturned.data.GiaBanLe;
        // this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;

        // this.displayChiTietHang[index].DonGia = new Intl.NumberFormat().format(dataReturned.data.GiaMua).replace(/\./g, ',');
        // this.getTongTien(index);

      }
    })
  }

  closeModal() {

    this.GlobalService.closeModal();
    // const content = document.querySelector('ion-content');
    //   content.classList.remove('camera');
  }

  doInfinite(event) {
    this.pageInfo.page++;
    setTimeout(() => {
      event.target.complete();
      this.getSandVT();
    }, 500);
  }
}
