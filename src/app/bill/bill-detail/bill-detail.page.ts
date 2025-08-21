import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintOptions, Printer } from '@ionic-native/printer/ngx';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { DonviIndexPage } from 'src/app/donvi/donvi-index/donvi-index.page';
import { FunctionService } from 'src/app/function.service';
import { KhoIndexPage } from 'src/app/kho/kho-index/kho-index.page';
import { AlertService } from 'src/app/service/AlertService';
import { KhoService } from 'src/app/service/kho.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
import { UnitService } from 'src/app/service/unit.service';
import { VattuService } from 'src/app/service/vattu.service';
import { XuatkhoService } from 'src/app/service/xuatkho.service';
import { VattuIndexPage } from 'src/app/vattu/vattu-index/vattu-index.page';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.page.html',
  styleUrls: ['./bill-detail.page.scss'],
})
export class BillDetailPage implements OnInit {
  chungchi: any = {
    ChungTuID: '',
    nam_du_lieu: ''
  };
  donvi: string = '';
  kho: string = '';
  sendItem: any = {
    "nam_du_lieu": "",
    "LoaiCTID": 2,
    "ChungTuID": 0,
    // "BanTheoDon": false,
    "SoCT": "",
    "ThoiDiem": "",
    "DienGiai": "",
    "ChiTietHang": []
  }

  ChiTietHang = {
    "NhapXuatID": 0,
    "MaVT": "",
    "DVT": "",
    "SoLuong": 0,
    "DonGia": 0,
    "GiaBanLe": 0,
    "GiaBanSy": 0,
    "ThanhTien": 0,
    "VAT_Percent": 0,
    "VAT": 0,
    "ChietKhau_Percent": 0,
    "ChietKhau": 0,
    "TongTien": 0,
    "HTTT": "TM",
    "LoHang": "",
    "HanDung": ""
  }

  sendVattu = {
    "loainx": "''",
    "khohang": "",
    "banggia": ""
  }
  displayChiTietHang: any = [];
  listKho: any = [];
  listUnit: any = [];
  listVattu: any = [];
  banggia: any = [];

  sendChungChi: any = {
    isCreate: false,
    ChungTuID: '',
    nam_du_lieu: ''
  };

  title: string = '';
  typePage: string = '';
  itemDetail: any = [];
  check: boolean = false;
  indexItem: boolean[] = [];
  countProduct: number = 0;
  sumThanhTien: number = 0;
  sumTongTien: number = 0;
  sumVAT: number = 0;
  sumChietKhau: number = 0;
  sumThanhToan: number = 0;
  LoaiCTID: number = 0;
  DienGiai: string = '';
  loainx: string = '';
  constructor(
    private ToastService: ToastService,
    public FunctionService: FunctionService,
    public router: Router,
    public toastController: ToastController,
    private modalController: ModalController,
    private XuatkhoService: XuatkhoService,
    private AlertService: AlertService,
    private navController: NavController,
    private LoadingService: LoadingService,
    private route: ActivatedRoute,
    private printer: Printer,
    private currencyPipe: CurrencyPipe,
    private KhoService: KhoService,
    private cdr: ChangeDetectorRef,
    private UnitService: UnitService,
    private VattuService: VattuService,

  ) {
    this.route.queryParams.subscribe(params => {
      this.chungchi.ChungTuID = params.ChungTuID;
      this.chungchi.nam_du_lieu = params.nam_du_lieu;
      this.sendChungChi.ChungTuID = params.ChungTuID;
      this.sendChungChi.nam_du_lieu = params.nam_du_lieu;
      this.LoaiCTID = params.LoaiCTID;
      this.DienGiai = params.DienGiai;
      this.typePage = params.Type;
      this.title = params.Type == 'detail' ? 'Chi tiết' : params.Type == 'create' ? 'Thêm' : 'Sửa';
      if (this.typePage == 'detail' || this.typePage == 'edit') {
        this.getChungTuDetail();
      }
      this.getLoaiCT();
      this.getUnit();
    });
  }

  ngOnInit() {
    console.log('this.chungchi', this.chungchi);

  }


  getLoaiCT() {
    this.FunctionService.getLoaiCT().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].LoaiCTID == this.sendItem.LoaiCTID) {
          this.banggia = response[i].BangGia;
          this.loainx = response[i].LoaiNX;
          break;
        }
      }
      this.getKho();

    }, (error) => {
      console.log('error', error);
    });
  }

  getKho() {

    this.KhoService.getKho().subscribe((response: any) => {
      this.listKho = response;
      if (this.typePage == 'create') {
        // this.makho = response[0].MaKho;
        this.kho = response[0].TenKho;
        // this.sendItem.KhoXuat = response[0].MaKho;
        this.sendItem.KhoNhap = response[0].MaKho;
      }

      this.getVattu();

    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
      }, 1000);
    });
  }

  getUnit() {
    this.UnitService.getUnit().subscribe((response: any) => {
      this.listUnit = response;
    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
      }, 1000);
    });
  }

  getVattu() {
    this.sendVattu.loainx = this.loainx;
    this.sendVattu.banggia = this.banggia;
    this.sendVattu.khohang = this.sendItem.KhoNhap;
    this.VattuService.GetListVT(this.sendVattu).subscribe((response: any) => {
      this.listVattu = response;
    }, (error) => {
      console.log('error', error);
    });
  }





  handleEdit() {
    this.typePage = 'edit';
  }

  handleDetail() {
    this.typePage = 'detail';
  }

  getChungTuDetail() {
    this.LoadingService.setValue(true);

    this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe((response: any) => {
      this.itemDetail = response[0];
      this.countProduct = response[0].ChiTietHang.length;

      // this.sendItem.BanTheoDon = response[0].BanTheoDon;
      this.sendItem.ChungTuID = response[0].ChungTuID;

      this.sendItem.LoaiCTID = response[0].LoaiCTID;
      this.sendItem.SoCT = response[0].SoCT;
      this.sendItem.ThoiDiem = response[0].ThoiDiem;
      this.sendItem.nam_du_lieu = this.chungchi.nam_du_lieu;

      this.sendItem.DVNhap = response[0].DVNhap;
      this.sendItem.KhoNhap = response[0].KhoNhap;
      this.donvi = response[0]._TenDVNhap;
      this.kho = response[0]._TenKhoNhap;


      this.setChietHang();
      this.LoadingService.setValue(false);
      this.countMoney(response[0]);
    }, (error) => {
      console.log('error', error);
      this.LoadingService.setValue(false);

    });
  }

  setChietHang() {
    this.sendItem.ChiTietHang = [];
    this.displayChiTietHang = [];

    for (let i = 0; i < this.itemDetail.ChiTietHang.length; i++) {
      this.sendItem.ChiTietHang.push({
        "NhapXuatID": this.itemDetail.ChiTietHang[i].NhapXuatID,
        "MaVT": this.itemDetail.ChiTietHang[i].MaVT,
        "DVT": this.itemDetail.ChiTietHang[i].DVT,
        "SoLuong": this.itemDetail.ChiTietHang[i].SoLuong,
        "DonGia": this.itemDetail.ChiTietHang[i].DonGia,
        "GiaBanLe": this.itemDetail.ChiTietHang[i].GiaBanLe ? this.itemDetail.ChiTietHang[i].GiaBanLe : 0,
        "GiaBanSy": this.itemDetail.ChiTietHang[i].GiaBanSy ? this.itemDetail.ChiTietHang[i].GiaBanSy : 0,
        "ThanhTien": this.itemDetail.ChiTietHang[i].ThanhTien,
        "VAT_Percent": this.itemDetail.ChiTietHang[i].VAT_Percent,
        "VAT": this.itemDetail.ChiTietHang[i].VAT,
        "ChietKhau_Percent": this.itemDetail.ChiTietHang[i].ChietKhau_Percent,
        "ChietKhau": this.itemDetail.ChiTietHang[i].ChietKhau,
        "TongTien": this.itemDetail.ChiTietHang[i].TongTien,
        "HTTT": this.itemDetail.ChiTietHang[i].HTTT ? this.itemDetail.ChiTietHang[i].HTTT : '',
        "LoHang": this.itemDetail.ChiTietHang[i].LoHang ? this.itemDetail.ChiTietHang[i].LoHang : '',
        "HanDung": this.itemDetail.ChiTietHang[i].HanDung ? this.itemDetail.ChiTietHang[i].HanDung : ''
      })

      this.displayChiTietHang.push({
        "_TenVT": this.itemDetail.ChiTietHang[i]._TenVT,
        "MaVT": this.itemDetail.ChiTietHang[i].MaVT,
        "DVT": this.itemDetail.ChiTietHang[i].DVT,
        'DonGia': this.itemDetail.ChiTietHang[i].DonGia ? new Intl.NumberFormat().format(this.itemDetail.ChiTietHang[i].DonGia).replace(/\./g, ',') : '0',
        'SoLuong': new Intl.NumberFormat().format(this.itemDetail.ChiTietHang[i].SoLuong).replace(/\./g, ','),
        "ChietKhau_Percent": this.itemDetail.ChiTietHang[i].ChietKhau_Percent,
        "VAT_Percent": this.itemDetail.ChiTietHang[i].VAT_Percent,
        "TongTien": this.itemDetail.ChiTietHang[i].TongTien,
      })
      console.log('displayChiTietHang', this.displayChiTietHang);

    }
  }

  countMoney(billDetail) {
    this.sumThanhTien = 0;
    this.sumTongTien = 0;
    this.sumVAT = 0;
    this.sumChietKhau = 0;
    this.sumThanhToan = 0;

    for (let i = 0; i < billDetail.ChiTietHang.length; i++) {

      this.sumThanhTien = this.sumThanhTien + billDetail.ChiTietHang[i].ThanhTien;
      console.log('this.sumThanhTien', this.sumThanhTien);
      console.log('this.billDetail.ChiTietHang[i].ThanhTien', billDetail.ChiTietHang[i].ThanhTien);

      this.sumTongTien = this.sumTongTien + billDetail.ChiTietHang[i].TongTien;
      this.sumVAT = this.sumVAT + billDetail.ChiTietHang[i].VAT;
      this.sumChietKhau = this.sumChietKhau + billDetail.ChiTietHang[i].ChietKhau;
      this.sumThanhToan = this.sumThanhToan + billDetail.ChiTietHang[i].ThanhToan;
    }
  }

  formatInput(item, index, type?) {
    if (type && type == 'plus') {
      this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) + 1);
    }
    if (type && type == 'subtraction') {
      this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) - 1);
    }
    console.log('this.displayChiTietHang[index][item]', this.displayChiTietHang[index][item]);

    var convNumber = this.currencyPipe.transform(this.displayChiTietHang[index][item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    this.displayChiTietHang[index][item] = convNumber;
    this.sendItem.ChiTietHang[index][item] = Number(convNumber.replace(/,/g, ''));
    if (item == "DonGia") {
      this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
      this.displayChiTietHang[index].DonGia = new Intl.NumberFormat().format(this.sendItem.ChiTietHang[index].DonGia).replace(/\./g, ',');
      this.getTongTien(index);
    }

    if (item == "SoLuong") {
      this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
      this.displayChiTietHang[index].ThanhTien = new Intl.NumberFormat().format(this.sendItem.ChiTietHang[index].ThanhTien).replace(/\./g, ',');
      this.getTongTien(index);
    }
  }

  async openUnit() {
    const modal = await this.modalController.create({
      component: DonviIndexPage,
      cssClass: 'modalOpen',
      componentProps: {
        "listUnit": this.listUnit,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);

      if (dataReturned.data) {
        this.sendItem.DVNhap = dataReturned.data.MaDV;
        this.donvi = dataReturned.data.TenDV;

      }
    });
    return await modal.present();
  }

  async openKho() {
    const modal = await this.modalController.create({
      component: KhoIndexPage,
      cssClass: 'modalOpen',
      componentProps: {
        "listKho": this.listKho,
      }

    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        // this.makho = dataReturned.data.MaKho;
        this.sendItem.KhoNhap = dataReturned.data.MaKho;
        this.kho = dataReturned.data.TenKho;
        this.getVattu();
      }
    });
    return await modal.present();
  }

  async openVattu() {
    // if (!this.makho) {
    //   return;
    // }
    // this.LoadingService.setValue(true);

    const modal = await this.modalController.create({
      component: VattuIndexPage,
      cssClass: 'modalOpen',
      componentProps: {
        // "makho": this.sendItem.KhoNhap,
        // "banggia": this.banggia,
        "listVattu": this.listVattu,
        "listItem": this.sendItem.ChiTietHang,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned && dataReturned.data) {
        this.displayChiTietHang = [];

        console.log('dataReturned.data', dataReturned.data);

        for (let i = 0; i < dataReturned.data.length; i++) {
          let foundVattu = this.listVattu.find((o: any) => o.MaVT === dataReturned.data[i].MaVT);

          this.displayChiTietHang.push({
            "_TenVT": foundVattu.TenVT,
            "MaVT": dataReturned.data[i].MaVT,
            "DVT": dataReturned.data[i].DVT,
            'DonGia': dataReturned.data[i].DonGia ? new Intl.NumberFormat().format(dataReturned.data[i].DonGia).replace(/\./g, ',') : '0',
            'SoLuong': new Intl.NumberFormat().format(dataReturned.data[i].SoLuong).replace(/\./g, ','),
            "ChietKhau_Percent": dataReturned.data[i].ChietKhau_Percent,
            "VAT_Percent": dataReturned.data[i].VAT_Percent,
            "TongTien": dataReturned.data[i].TongTien,
          })
        }
        this.countMoney(this.sendItem)
      }
    });
    return await modal.present();
  }


  setInput(e, item, index) {
    this.sendItem.ChiTietHang[index][item] = e;
    if (item == "ChietKhau_Percent") {
      this.sendItem.ChiTietHang[index].ChietKhau = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].ChietKhau_Percent / 100;
      this.getTongTien(index);
    }

    if (item == "VAT_Percent") {
      this.sendItem.ChiTietHang[index].VAT = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].VAT_Percent / 100;
      this.getTongTien(index);
    }
  }

  getTongTien(index) {
    this.sendItem.ChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].ThanhTien + this.sendItem.ChiTietHang[index].VAT - this.sendItem.ChiTietHang[index].ChietKhau;
    this.displayChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].TongTien
    this.countMoney(this.sendItem);
  }

  handleRemove(item, index) {
    this.AlertService.presentAlert(`Bạn có chắc muốn xóa mặt hàng "${item._TenVT}"?`).then(res => {
      if (res == 'true') {
        // console.log('eeee');
        this.displayChiTietHang.splice(index, 1);
        this.sendItem.ChiTietHang.splice(index, 1);
        this.countMoney(this.sendItem);
        // this.countMoney(this.displayChiTietHang);

      }
    });
  }

  confirmSubmit() {
    console.log('this.sendItem', this.sendItem);

    if (this.typePage == 'true') {
      // var checkExit = false;
      // if (this.sendItem.ChiTietHang.length != 0) {
      //   for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
      //     if (!this.sendItem.ChiTietHang[i].SoLuong) {
      //       checkExit = true;
      //     }
      //   }
      // } else {
      //   checkExit = true;
      // }
      // if (!checkExit) {
      this.AlertService.presentAlert(`Bạn có chắc muốn thêm hóa đơn?`,).then(res => {
        if (res == 'true') {
          this.createImport();
        }
      });
      // }
    } else {
      console.log('edit', this.sendItem);
      this.AlertService.presentAlert(`Bạn có chắc muốn sửa hóa đơn?`,).then(res => {
        if (res == 'true') {
          this.updateImport();
        }
      });
    }

  }

  createImport() {

    this.LoadingService.setValue(true);
    this.XuatkhoService.createXuatHang(this.sendItem).subscribe((response: any) => {
      if (response.code == 0) {
        this.ToastService.successToast(response.message);
        // this.resetItem();
        this.LoadingService.setValue(false);

      } else {
        this.ToastService.errorToast(response.message);
        this.LoadingService.setValue(false);

      }
    }, (error) => {
      this.LoadingService.setValue(false);
      console.log('error', error);
    });
  }


  updateImport() {
    this.LoadingService.setValue(true);
    this.XuatkhoService.updateXuatHang(this.sendItem).subscribe((response: any) => {
      console.log('response', response);
      if (response.code == 0) {
        this.ToastService.successToast(response.message);
        this.LoadingService.setValue(false);
      } else {
        this.ToastService.errorToast(response.message);
        this.LoadingService.setValue(false);
      }

      // this.LoadingService.setValue(false);

    }, (error) => {
      this.LoadingService.setValue(false);
      console.log('error', error);
    });
  }


  openPrint() {
    var myDiv = document.getElementById("myDiv");
    var divContent = myDiv.outerHTML;

    this.printer.isAvailable().then((onsuccess: any) => {
      console.log('onsuccess', onsuccess);

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

  openBack() {
    console.log('aaaaa');
    // var item = {
    //   "DienGiai": this.DienGiai,
    //   "LoaiCTID": this.LoaiCTID
    // }
    this.navController.navigateBack(['bill-list'], {
      // queryParams: item
    });

    // this.router.navigateByUrl("xuathang");
  }

}
