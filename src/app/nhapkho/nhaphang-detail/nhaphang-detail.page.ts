import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintOptions, Printer } from '@ionic-native/printer/ngx';
import { ActionSheetController, ModalController, NavController, PopoverController, ToastController } from '@ionic/angular';
import { BillWaitPage } from 'src/app/bill/bill-wait/bill-wait.page';
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
import { DVTComponent } from 'src/app/donvitinh/dvt/dvt.component';
import { VattuIndexPage } from 'src/app/vattu/vattu-index/vattu-index.page';
import { convertHelper } from 'src/app/share/helper';
@Component({
  selector: 'app-nhaphang-detail',
  templateUrl: './nhaphang-detail.page.html',
  styleUrls: ['./nhaphang-detail.page.scss'],
})
export class NhaphangDetailPage implements OnInit {
  chungchi: any = {
    ChungTuID: '',
    nam_du_lieu: ''
  };
  donvi: string = '';
  kho: string = '';
  sumBillWait: number = 0;
  submit: boolean = false;
  sendItem: any = {
    "DVNhap": "",
    "KhoNhap": "",
    "nam_du_lieu": "",
    "LoaiCTID": 2,
    "ChungTuID": 0,
    // "BanTheoDon": false,
    "SoCT": "",
    "ThoiDiem": "",
    "DienGiai": "",
    "ChietKhau": 0,
    "ThanhToan": 0,
    "ChiTietHang": [],
    "SoTK": "",
  }
  ChietKhauHD: string = '0';
  ThanhToanHD: string = '0';
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
  xuatam: any;

  sendVattu = {
    "loainx": "''",
    "khohang": "",
    "banggia": "",
    "xuatam": 0
  }
  displayChiTietHang: any = [];
  listKho: any = [];
  listUnit: any = [];
  listVattu: any = [];
  listTaiKhoan: Array<{ Id: number, LoaiTK: string, SoTK: string, TenTK: string, }>;
  banggia: any = [];
  HTTT_name: string = 'Tiền mặt';
  sendChungChi: any = {
    isCreate: false,
    ChungTuID: '',
    nam_du_lieu: ''
  };
  loaiCTNow: any = {};
  title: string = '';
  typePage: string = '';
  itemDetail: any = [];
  listBillWait: any = [];
  check: boolean = false;
  indexItem: boolean[] = [];
  countProduct: number = 0;
  sumThanhTien: number = 0;
  sumTongTien: number = 0;
  sumTongTienTemp: number = 0;
  sumVAT: number = 0;
  sumChietKhau: number = 0;
  sumChietKhauTemp: number = 0;
  // sumThanhToan: number = 0;
  loaiCT_name: string = '';
  LoaiCTID: number = 0;
  checkChungTuID: number = 0;
  DienGiai: string = '';
  pageParent: string = '';
  LoaiCTByBill: any = [];
  loainx: string = '';
  SoTK: string;

  constructor(
    private ToastService: ToastService,
    public FunctionService: FunctionService,
    public router: Router,
    public toastController: ToastController,
    private modalController: ModalController,
    public convertHelper: convertHelper,
    private XuatkhoService: XuatkhoService,
    private AlertService: AlertService,
    private navController: NavController,
    private LoadingService: LoadingService,
    private route: ActivatedRoute,
    private printer: Printer,
    private currencyPipe: CurrencyPipe,
    public popoverController: PopoverController,
    private KhoService: KhoService,
    private cdr: ChangeDetectorRef,
    private UnitService: UnitService,
    private VattuService: VattuService,
    private actionSheetController: ActionSheetController,


  ) {
    this.getDSTK();
    this.listBillWait = JSON.parse(localStorage.getItem('billWaitNhapHang') || '[]');

    this.route.queryParams.subscribe(params => {
      this.chungchi.ChungTuID = params.ChungTuID;
      this.chungchi.nam_du_lieu = params.nam_du_lieu;
      this.sendChungChi.ChungTuID = params.ChungTuID;
      this.sendChungChi.nam_du_lieu = params.nam_du_lieu;
      this.LoaiCTID = params.LoaiCTID;
      this.DienGiai = params.DienGiai;
      this.typePage = params.Type;
      this.pageParent = params.pageParent;

      this.title = params.Type == 'detail' ? 'Chi tiết' : params.Type == 'create' ? 'Thêm' : 'Sửa';
      this.countBillWait();


      if (this.typePage == 'detail' || this.typePage == 'edit') {
        this.getChungTuDetail();
      } else {
        var now = new Date();
        var year = now.getFullYear();
        var hours = now.getHours();
        var minute = now.getMinutes();
        this.sendItem.nam_du_lieu = year.toString();

        var LoaiCT = JSON.parse(localStorage.getItem('loaiNhapHang') || '[]');
        if (params.LoaiCTID) {
          this.loaiCTNow = this.convertHelper.typeChungTuObj(params.LoaiCTID);
          this.loaiCT_name = this.loaiCTNow.DienGiai;
          this.sendItem.LoaiCTID = this.loaiCTNow.LoaiCTID;
        } else {
          this.loaiCTNow = LoaiCT[0];
          this.loaiCT_name = LoaiCT[0].DienGiai;
          this.sendItem.LoaiCTID = LoaiCT[0].LoaiCTID;
        }
        this.sendItem.SoTK = this.SoTK;
        this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
        this.sendItem.ChungTuID = new Date().getTime();
        this.sendItem.SoCT = `${this.getInitials(LoaiCT[0].DienGiai)}${this.sendItem.ChungTuID}`;
        this.getLoaiCT();

      }
      this.getUnit();
    });
  }

  ngOnInit() {
    this.sumBillWait = this.listBillWait.length;
  }

  onSoTKChange($event) {
    this.SoTK = "111";
    if ($event.target.value == undefined) {
      this.SoTK = "111";
    }
    else {
      this.SoTK = $event.target.value;
      console.log("197", this.SoTK);
      this.sendItem.SoTK = this.SoTK;
    }
  }

  getDSTK()//Lấy danh sách tài khoản
  {
    this.FunctionService.getDSTK().subscribe((response: any) => {
      // console.log("212", response)
      this.listTaiKhoan = response;
    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
      }, 1000);
    });
  }


  getLoaiCT() {
    this.LoaiCTByBill = JSON.parse(localStorage.getItem('loaiNhapHang') || '[]');
    for (let i = 0; i < this.LoaiCTByBill.length; i++) {

      if (this.LoaiCTByBill[i].LoaiCTID == this.sendItem.LoaiCTID) {
        this.loaiCTNow = this.LoaiCTByBill[i];
        this.loaiCT_name = this.LoaiCTByBill[i].DienGiai;
        this.banggia = this.LoaiCTByBill[i].BangGia;
        this.loainx = this.LoaiCTByBill[i].LoaiNX;
        this.xuatam = this.LoaiCTByBill[i].XuatAm;
        break;
      }
    }

    this.getKho();
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
    this.sendVattu.xuatam = this.xuatam ? 1 : 0;
    this.sendVattu.khohang = this.sendItem.KhoNhap;
    this.VattuService.GetListVT(this.sendVattu).subscribe((response: any) => {
      this.listVattu = response;
    }, (error) => {
      console.log('error', error);
    });
  }

  convNumber(number) {
    return number < 10 ? '0' + number : number;
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
      this.sendItem.ChietKhau = response[0].ChietKhau;
      this.sendItem.ThanhToan = response[0].ThanhToan;
      this.donvi = response[0]._TenDVNhap;
      this.kho = response[0]._TenKhoNhap;
      this.HTTT_name = response[0].ChiTietHang[0].HTTT == 'CK' ? 'Chuyển khoản' : 'Tiền mặt';
      this.ChietKhauHD = this.currencyPipe.transform(String(response[0].ChietKhau).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
      for (let i = 0; i <= this.listTaiKhoan.length; i++) {
        let item = this.listTaiKhoan[i];
        if (item != undefined) {
          if (item.SoTK == response[0].SoTK) {
            this.SoTK = item.SoTK;
          }
        }

      }
      this.getLoaiCT();

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
    }
  }

  countMoney(billDetail) {
    this.sumThanhTien = 0;
    this.sumTongTien = 0;
    this.sumVAT = 0;
    this.sumChietKhau = 0;
    this.sumChietKhauTemp = 0;
    // this.sumThanhToan = 0;
    if (this.typePage != 'create') {
      this.sumChietKhau = this.itemDetail.ChietKhau ? this.itemDetail.ChietKhau : 0;
    }

    for (let i = 0; i < billDetail.ChiTietHang.length; i++) {

      this.sumThanhTien = this.sumThanhTien + billDetail.ChiTietHang[i].ThanhTien;
      this.sumTongTien = this.sumTongTien + billDetail.ChiTietHang[i].TongTien;
      this.sumVAT = this.sumVAT + billDetail.ChiTietHang[i].VAT;
      this.sumChietKhauTemp = this.sumChietKhauTemp + billDetail.ChiTietHang[i].ChietKhau;
      // this.sumChietKhauTemp = this.sumChietKhau + billDetail.ChiTietHang[i].ChietKhau;

    }

    this.sumChietKhau = this.sumChietKhauTemp + billDetail.ChietKhau;
    this.sumTongTien -= billDetail.ChietKhau;
    if (this.typePage == 'create') {
      this.sendItem.ThanhToan = this.sumTongTien;
      this.ThanhToanHD = this.currencyPipe.transform(String(this.sumTongTien).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    } else {
      this.ThanhToanHD = this.currencyPipe.transform(String(this.sendItem.ThanhToan).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')

    }
    this.sumTongTienTemp = this.sumTongTien;

  }

  formatInput(item, index, type?) {
    // if (type && type == 'plus') {
    //   this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) + 1);
    // }
    // if (type && type == 'subtraction') {
    //   this.displayChiTietHang[index][item] = String(Number(this.displayChiTietHang[index][item].replace(/,/g, '')) - 1);
    // }

    var convNumber = this.currencyPipe.transform(this.displayChiTietHang[index][item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    this.displayChiTietHang[index][item] = convNumber;
    if (item == "DonGia" || item == "SoLuong") {
      this.sendItem.ChiTietHang[index][item] = Number(this.displayChiTietHang[index][item].replace(/,/g, ''));
      this.sumMoney(index);

      this.getTongTien(index);

    }

  }

  formatInputBill(item, e) {
    // var tesst = Number(this.sendItem[item].replace(/,/g, ''));
    // var test = e;
    // console.log('tesst', test, e);
    this.sendItem[item] = Number(e.replace(/,/g, ''));
    var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
    if (item == 'ChietKhau') {
      this.ChietKhauHD = convNumber;
      this.sumChietKhau = this.sumChietKhauTemp;
      this.sumChietKhau += this.sendItem.ChietKhau;

      this.sumTongTien = this.sumThanhTien + this.sumVAT - this.sumChietKhau;
      this.sendItem.ThanhToan = this.sumTongTien;
      this.ThanhToanHD = this.currencyPipe.transform(String(this.sumTongTien).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');

    } else if (item == 'ThanhToan') {
      this.ThanhToanHD = convNumber;
    }

  }

  async openUnit() {
    const modal = await this.modalController.create({
      component: DonviIndexPage,
      cssClass: 'modalOpen',
      componentProps: {
        'page': 'nhapmua'
        // "listUnit": this.listUnit,
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
        // "listKho": this.listKho,
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
        "page": "nhapmua",
        "listVattu": this.listVattu,
        "listItem": this.sendItem.ChiTietHang,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned && dataReturned.data) {
        this.displayChiTietHang = [];

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
        this.sendItem.ChiTietHang = dataReturned.data;
        this.countProduct = this.displayChiTietHang.length;
        this.countMoney(this.sendItem);

      }
    });
    return await modal.present();
  }

  async openTypeChungTu() {
    var arrBtn = [];
    for (let i = 0; i < this.LoaiCTByBill.length; i++) {
      arrBtn.push({
        text: this.LoaiCTByBill[i].DienGiai,
        icon: 'cash-outline',
        cssClass: this.sendItem.LoaiCTID == this.LoaiCTByBill[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
        handler: () => {
          this.loaiCT_name = this.LoaiCTByBill[i].DienGiai;
          this.sendItem.LoaiCTID = this.LoaiCTByBill[i].LoaiCTID;
          this.sendItem.SoCT = `${this.getInitials(this.LoaiCTByBill[i].DienGiai)}${this.sendItem.ChungTuID}`;
          this.loaiCTNow = this.LoaiCTByBill[i];

        }
      })
    }
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: arrBtn
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  getInitials(text) {
    const words = text.split(' ');
    const initials = words.map(word => word.charAt(0).toUpperCase());
    return initials.join('');
  }

  async handleHTTT() {

    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: [
        {
          text: 'Tiền mặt',
          icon: 'cash-outline',
          cssClass: this.HTTT_name == 'Tiền mặt' ? 'buttonSheetOn' : 'buttonSheetOff',
          handler: () => {
            this.HTTT_name = 'Tiền mặt'
          }
        },
        {
          text: 'Chuyển khoản',
          icon: 'card-outline',
          cssClass: this.HTTT_name == 'Chuyển khoản' ? 'buttonSheetOn' : 'buttonSheetOff',
          handler: () => {
            this.HTTT_name = 'Chuyển khoản'

          },
        }
      ]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
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
    this.displayChiTietHang[index].TongTien = this.sendItem.ChiTietHang[index].TongTien;
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

  resetItem() {

    this.submit = false;

    this.sendItem = {
      "DVNhap": "",
      "KhoNhap": this.sendItem.KhoNhap,
      "nam_du_lieu": "",
      "LoaiCTID": this.sendItem.LoaiCTID,
      "ChungTuID": 0,
      "SoCT": "",
      "ThoiDiem": "",
      "DienGiai": "",
      "ChietKhau": 0,
      "ThanhToan": 0,
      "ChiTietHang": []
    }
    this.ChietKhauHD = '0';
    this.ThanhToanHD = '0';
    this.donvi = "";
    this.sendItem.ChiTietHang = [];
    this.displayChiTietHang = [];
    this.sumThanhTien = 0;
    this.sumTongTien = 0;
    this.sumVAT = 0;
    this.sumChietKhau = 0;
    this.sumChietKhauTemp = 0;
    this.sumTongTienTemp = 0;
    // this.sumThanhToan = 0;
    this.countProduct = 0;
    var now = new Date();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minute = now.getMinutes();
    this.sendItem.nam_du_lieu = year.toString();
    this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
    this.sumTongTien = 0;

    this.sendItem.ChungTuID = new Date().getTime();
    this.sendItem.SoCT = `${this.getInitials(this.loaiCTNow.DienGiai)}${this.sendItem.ChungTuID}`;
    this.getVattu();
  }

  async handleDVT(MaVT, DVT, index) {
    localStorage.setItem("InOutType", "N");
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
      if (dataReturned.data) {
        this.sendItem.ChiTietHang[index].DVT = dataReturned.data.DVT;
        this.sendItem.ChiTietHang[index].DonGia = dataReturned.data.GiaMua;
        this.sendItem.ChiTietHang[index].GiaBanLe = dataReturned.data.GiaBanLe;
        this.sendItem.ChiTietHang[index].GiaBanSy = dataReturned.data.GiaBanSy;
        this.sumMoney(index);

        this.displayChiTietHang[index].DonGia = new Intl.NumberFormat().format(dataReturned.data.GiaMua).replace(/\./g, ',');
        this.getTongTien(index);

      }
    })
  }

  sumMoney(index) {
    this.sendItem.ChiTietHang[index].ThanhTien = this.sendItem.ChiTietHang[index].SoLuong * this.sendItem.ChiTietHang[index].DonGia;
    this.sendItem.ChiTietHang[index].ChietKhau = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].ChietKhau_Percent / 100;
    this.sendItem.ChiTietHang[index].VAT = this.sendItem.ChiTietHang[index].ThanhTien * this.sendItem.ChiTietHang[index].VAT_Percent / 100;
  }


  countBillWait() {
    // this.sumBillWait = 0;
    // for (let i = 0; i < this.listBillWait.length; i++) {
    //   if (this.listBillWait[i].LoaiCTID == this.LoaiCTID) {
    //     this.sumBillWait += 1;
    //   }
    // }
    this.sumBillWait = this.listBillWait.length;

  }

  async openBillWait() {
    const modal = await this.modalController.create({
      component: BillWaitPage,
      cssClass: 'modalOpen',
      componentProps: {
        "LoaiCTID": this.LoaiCTID,
        "LoaiNX": this.loaiCTNow.LoaiNX

      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);
      this.listBillWait = JSON.parse(localStorage.getItem('billWaitNhapHang') || '[]');
      this.sumBillWait = this.listBillWait.length;

      if (dataReturned.data) {
        this.sendItem = dataReturned.data.item;
        this.kho = dataReturned.data.item.kho_name;
        this.donvi = dataReturned.data.item.donvi_name;
        this.displayChiTietHang = [];
        for (let i = 0; i < dataReturned.data.item.ChiTietHang.length; i++) {

          this.displayChiTietHang.push({
            "_TenVT": dataReturned.data.item.ChiTietHang[i]._TenVT,
            "MaVT": dataReturned.data.item.ChiTietHang[i].MaVT,
            "DVT": dataReturned.data.item.ChiTietHang[i].DVT,
            'DonGia': dataReturned.data.item.ChiTietHang[i].DonGia ? new Intl.NumberFormat().format(dataReturned.data.item.ChiTietHang[i].DonGia).replace(/\./g, ',') : '0',
            'SoLuong': new Intl.NumberFormat().format(dataReturned.data.item.ChiTietHang[i].SoLuong).replace(/\./g, ','),
            "ChietKhau_Percent": dataReturned.data.item.ChiTietHang[i].ChietKhau_Percent,
            "VAT_Percent": dataReturned.data.item.ChiTietHang[i].VAT_Percent,
            "TongTien": dataReturned.data.item.ChiTietHang[i].TongTien,
            "LoHang": dataReturned.data.item.ChiTietHang[i].LoHang,
            "HanDung": dataReturned.data.item.ChiTietHang[i].HanDung,
          })
        }


        this.countProduct = this.displayChiTietHang.length;
        this.checkChungTuID = dataReturned.data.item.ChungTuID;
        this.countMoney(this.sendItem);

        // for (let i = 0; i < this.listKho.length; i++) {
        //   if (this.listKho[i].MaKho == dataReturned.data.item.KhoNhap) {
        //     this.kho = this.listKho[i].TenKho;
        //     break;
        //   }
        // }

        // if (dataReturned.data.item.DVNhap) {
        //   for (let i = 0; i < this.listUnit.length; i++) {
        //     if (this.listUnit[i].MaDV == dataReturned.data.item.DVNhap) {
        //       this.donvi = this.listUnit[i].TenDV;
        //       break;
        //     }
        //   }
        // }
        var now = new Date();
        var year = now.getFullYear();
        var hours = now.getHours();
        var minute = now.getMinutes();
        this.sendItem.nam_du_lieu = year.toString();
        this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
        this.sendItem.ChietKhau = dataReturned.data.item.ChietKhau;
        this.sendItem.ThanhToan = dataReturned.data.item.ThanhToan;
        this.ChietKhauHD = this.currencyPipe.transform(String(this.sendItem.ChietKhau).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0');
        this.sendItem.ChungTuID = dataReturned.data.item.ChungTuID;
        this.sendItem.SoCT = dataReturned.data.item.SoCT;
        // this.sendItem.ChungTuID = new Date().getTime();
        // this.sendItem.SoCT = `${this.getInitials(this.loaiCTNow.DienGiai)}${this.sendItem.ChungTuID}`;

      }
    });
    return await modal.present();
  }

  confirmSubmit() {
    this.submit = true;
    if (!this.donvi) {
      this.ToastService.warningToast("Vui lòng chọn đơn vị!");
      return;
    }
    if (this.sumTongTien == 0) {
      return;
    }

    for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
      this.sendItem.ChiTietHang[i].HTTT = this.HTTT_name == 'Tiền mặt' ? 'TM' : 'CK';
    }

    if (this.SoTK == undefined) {
      for (let i = 0; i <= this.listTaiKhoan.length; i++) {
        let item = this.listTaiKhoan[i];
        if (item != undefined) {
          if (item.LoaiTK == "111") {
            this.SoTK = item.SoTK;
            console.log("827", this.SoTK);
            this.sendItem.SoTK = this.SoTK;
          }
        }

      }
    }

    if (this.typePage == 'create') {
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
      this.AlertService.presentAlert(`Bạn có chắc muốn sửa hóa đơn?`,).then(res => {
        if (res == 'true') {
          this.updateImport();
        }
      });
    }

  }

  backListBill() {
    this.navController.navigateBack(["bill-list"], {
      queryParams: {
        'LoaiCTID': this.loaiCTNow.LoaiCTID,
        'DienGiai': this.DienGiai
      }
    });
  }

  createImport() {

    this.LoadingService.setValue(true);
    this.XuatkhoService.createXuatHang(this.sendItem).subscribe((response: any) => {
      if (response.code == 0) {
        this.ToastService.successToast(response.message);
        this.resetItem();
        this.LoadingService.setValue(false);
        for (let i = 0; i < this.listBillWait.length; i++) {
          if (this.listBillWait[i].ChungTuID == this.checkChungTuID) {
            this.listBillWait.splice(i, 1);
            localStorage.setItem('billWaitNhapHang', JSON.stringify(this.listBillWait));
            this.countBillWait();
            break;
          }
        }
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
      if (response.code == 0) {
        this.ToastService.successToast(response.message);
        this.getChungTuDetail();

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


  handleBillWait() {
    this.sendItem.kho_name = this.kho;
    this.sendItem.donvi_name = this.donvi;
    this.listBillWait.push(this.sendItem);
    localStorage.setItem('billWaitNhapHang', JSON.stringify(this.listBillWait));
    this.countBillWait();

    this.resetItem();
    this.ToastService.successToast('Thêm hóa đơn chờ thành công!');
  }

  openBack() {
    if (this.pageParent == 'home') {
      this.navController.navigateBack(['tabs/tab3']);
    } else {
      this.navController.navigateBack(["bill-list"], {
        queryParams: {
          'LoaiCTID': this.LoaiCTID,
          'DienGiai': this.DienGiai
        }
      });
    }

  }

}
