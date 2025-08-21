import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrintOptions, Printer } from '@ionic-native/printer/ngx';
import { ActionSheetController, ModalController, NavController, NavParams } from '@ionic/angular';
import { DonviIndexPage } from 'src/app/donvi/donvi-index/donvi-index.page';
import { FunctionService } from 'src/app/function.service';
import { KhoIndexPage } from 'src/app/kho/kho-index/kho-index.page';
import { AlertService } from 'src/app/service/AlertService';
import { GlobalService } from 'src/app/service/global.service';
import { KhoService } from 'src/app/service/kho.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
import { UnitService } from 'src/app/service/unit.service';
import { VattuService } from 'src/app/service/vattu.service';
import { XuatkhoService } from 'src/app/service/xuatkho.service';

@Component({
  selector: 'app-xuathang-addnew',
  templateUrl: './xuathang-addnew.page.html',
  styleUrls: ['./xuathang-addnew.page.scss'],
})
export class XuathangAddnewPage implements OnInit {
  listFormItem = [{
    'item': 1
  }]

  displayItem: any = {
    "nam_du_lieu": "",
    "LoaiCTID": 2,
    "ChungTuID": 0,
    "BanTheoDon": false,
    "SoCT": "",
    "ThoiDiem": "",
    "DienGiai": "",
    "DVXuat": "",
    "KhoXuat": "",
    "ChiTietHang": []
  }

  sendItem: any = {
    "nam_du_lieu": "",
    "LoaiCTID": 2,
    "ChungTuID": 0,
    "BanTheoDon": false,
    "SoCT": "",
    "ThoiDiem": "",
    "DienGiai": "",
    "DVXuat": "",
    "KhoXuat": "",
    "ChiTietHang": []
  }

  sendVattu = {
    "loainx": "''",
    "khohang": "",
    "banggia": ""
  }
  send_httt: string = 'TM';
  display_httt: string = 'Tiền mặt';
  isCreate: string = 'false';
  chungchi: any = {
    ChungTuID: '',
    nam_du_lieu: ''
  }
  countNumber: number = 0;
  title: string = "Thêm";
  itemDetail: any = '';
  itemDetail2: any = '';
  makho: string = '';
  backPage: string = '';
  submitForm: number = 0;
  index: number = 0;
  DienGiai: string = '';
  LoaiCTID: number = 0;
  sumMoney: number = 0;
  listKho: any = [];
  listLoaiCT: any = [];
  listVattu: any = [];
  listUnit: any = [];
  banggia: string = '';
  constructor(
    public modalController: ModalController,
    // private navParams: NavParams,
    private GlobalService: GlobalService,
    private XuatkhoService: XuatkhoService,
    private VattuService: VattuService,
    private LoadingService: LoadingService,
    private route: ActivatedRoute,
    private ToastService: ToastService,
    public router: Router,
    private navController: NavController,
    private actionSheetController: ActionSheetController,
    private KhoService: KhoService,
    private UnitService: UnitService,
    private cdr: ChangeDetectorRef,
    private FunctionService: FunctionService,
    private AlertService: AlertService,
    private printer: Printer,


  ) {
  }


  ionViewDidEnter() {
    console.log('------ionViewDidEnter')

    this.route.queryParams.subscribe(params => {
      this.isCreate = params.isCreate;
      this.sendItem.LoaiCTID = Number(params.LoaiCTID);
      this.displayItem.LoaiCTID = Number(params.LoaiCTID);
      this.DienGiai = params.DienGiai;

      if (params.isCreate == 'true') {

        var now = new Date();
        var year = now.getFullYear();
        var hours = now.getHours();
        var minute = now.getMinutes();
        this.sendItem.nam_du_lieu = year.toString();
        this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
        this.sendItem.ChungTuID = new Date().getTime();
        this.sendItem.SoCT = `XBL${this.sendItem.ChungTuID}`;

        this.chungchi.ChungTuID = this.sendItem.ChungTuID;
        this.chungchi.nam_du_lieu = this.sendItem.nam_du_lieu;
      } else {
        this.title = "Sửa";
        this.chungchi.ChungTuID = params.ChungTuID;
        this.chungchi.nam_du_lieu = params.nam_du_lieu;
        this.backPage = params.page;
        if (params.index) {
          this.index = params.index;
          this.scrollIntoView(`item${this.index}`);
        }
      }
    })

    if (this.isCreate == 'false') {
      this.getChungTuDetail();
    } else {
      // this.resetItem();

    }
    this.getLoaiCT();
    this.getUnit();

  }



  ngOnInit() {
  }

  getKho() {

    this.KhoService.getKho().subscribe((response: any) => {
      this.listKho = response;
      if (this.isCreate == 'true') {
        this.makho = response[0].MaKho;
        this.displayItem.KhoXuat = response[0].TenKho;
        this.sendItem.KhoXuat = response[0].MaKho;
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
    this.sendVattu.banggia = this.banggia;
    this.sendVattu.khohang = this.sendItem.KhoXuat;
    this.VattuService.GetListVT(this.sendVattu).subscribe((response: any) => {
      this.listVattu = response;
    }, (error) => {
      console.log('error', error);
    });
  }

  getLoaiCT() {
    this.FunctionService.getLoaiCT().subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        if (response[i].LoaiCTID == this.sendItem.LoaiCTID) {
          this.banggia = response[i].BangGia;
          break;
        }
      }
      this.getKho();

    }, (error) => {
      console.log('error', error);
    });
  }

  resetItem() {
    this.displayItem = {
      "nam_du_lieu": "",
      "LoaiCTID": this.sendItem.LoaiCTID,
      "ChungTuID": 0,
      "BanTheoDon": false,
      "SoCT": "",
      "ThoiDiem": "",
      "DienGiai": "",
      "DVXuat": this.displayItem.DVXuat,
      "KhoXuat": this.displayItem.KhoXuat,
      "ChiTietHang": []
    }

    this.sendItem = {
      "nam_du_lieu": "",
      "LoaiCTID": this.sendItem.LoaiCTID,
      "ChungTuID": 0,
      "BanTheoDon": false,
      "SoCT": "",
      "ThoiDiem": "",
      "DienGiai": "",
      "DVXuat": this.sendItem.DVXuat,
      "KhoXuat": this.sendItem.KhoXuat,
      "ChiTietHang": []
    }

    this.listFormItem = [{
      'item': 1
    }]


    var now = new Date();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minute = now.getMinutes();
    this.sendItem.nam_du_lieu = year.toString();
    this.sendItem.ThoiDiem = now.toISOString().slice(0, 11) + `${this.convNumber(hours)}:${this.convNumber(minute)}:00`;
    this.sumMoney = 0;
   
    this.sendItem.ChungTuID = new Date().getTime();
    this.sendItem.SoCT = `XBL${this.sendItem.ChungTuID}`;
    setTimeout(() => {
      this.chungchi.ChungTuID = this.sendItem.ChungTuID;
      this.chungchi.nam_du_lieu = this.sendItem.nam_du_lieu;
    }, 4000);
  }

  scrollIntoView(position: string) {
    setTimeout(() => {
      const element = document.getElementById(position);
      element?.scrollIntoView({ behavior: 'auto' });
    }, 1000);
  }

  getChungTuDetail() {
    this.LoadingService.setValue(true);

    this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe((response: any) => {
      this.itemDetail = response[0];
      this.makho = response[0].KhoXuat;

      this.displayItem.KhoXuat = response[0]._TenKhoXuat;
      this.displayItem.DVXuat = response[0]._TenDVXuat;
      this.listFormItem = response[0].ChiTietHang;

      this.sendItem.BanTheoDon = response[0].BanTheoDon;
      this.sendItem.ChungTuID = response[0].ChungTuID;
      this.sendItem.DVXuat = response[0].DVXuat;
      this.sendItem.KhoXuat = response[0].KhoXuat;
      this.sendItem.LoaiCTID = response[0].LoaiCTID;
      this.sendItem.SoCT = response[0].SoCT;
      this.sendItem.ThoiDiem = response[0].ThoiDiem;
      this.sendItem.nam_du_lieu = this.chungchi.nam_du_lieu;
      console.log('response1111', response);
      // this.LoadingService.setValue(false);
      this.LoadingService.setValue(false);

    }, (error) => {
      console.log('error', error);
      this.LoadingService.setValue(false);

    });
  }

  getChungTuDetail2() {
    // this.LoadingService.setValue(true);
    console.log('this.chungchi', this.chungchi);
    
    this.XuatkhoService.xuatHangDetail(this.chungchi).subscribe((response: any) => {
      
      this.itemDetail2 = response[0];
      this.cdr.detectChanges();

      setTimeout(() => {
      this.LoadingService.setValue(false);
      this.openPrint();
      }, 3000);

    }, (error) => {
      console.log('error', error);
      this.LoadingService.setValue(false);
    });
  }

  convNumber(number) {
    return number < 10 ? '0' + number : number;
  }

  addForm() {
    this.listFormItem.push({ item: 1 });
    this.index = this.listFormItem.length - 1;
  }

  async openDonvi() {
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
        this.sendItem.DVXuat = dataReturned.data.MaDV;
        this.displayItem.DVXuat = dataReturned.data.TenDV;

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
        this.makho = dataReturned.data.MaKho;
        this.sendItem.KhoXuat = dataReturned.data.MaKho;
        this.displayItem.KhoXuat = dataReturned.data.TenKho;
        this.getVattu();
      }
    });
    return await modal.present();
  }

  getData(item) {
    this.sendItem.ChiTietHang[item.index] = item.item;
    setTimeout(() => {
      this.sumAllMoney();
    }, 100);

  }

  sumAllMoney() {
    this.sumMoney = 0;
    for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
      this.sumMoney = this.sumMoney + this.sendItem.ChiTietHang[i].TongTien;
    }
    this.cdr.detectChanges();
  }

  getIndex(item) {
    this.index = item.index;
  }

  getDelete(item) {
    this.listFormItem.splice(item.index, 1);
    this.sendItem.ChiTietHang.splice(item.index, 1);
    this.sumAllMoney();
  }

  submit() {

    this.submitForm++;
    if (this.isCreate == 'true') {
      var checkExit = false;
      if (this.sendItem.ChiTietHang.length != 0) {
        for (let i = 0; i < this.sendItem.ChiTietHang.length; i++) {
          if (!this.sendItem.ChiTietHang[i].SoLuong) {
            checkExit = true;
          }
        }
      } else {
        checkExit = true;
      }
      if (!checkExit) {
        this.confirmCreate();
        console.log('create', this.sendItem);

      }
    } else {
      console.log('edit', this.sendItem);
      this.AlertService.presentAlert2(`Bạn có chắc muốn sửa phiếu?`, this.DienGiai == 'Xuất bán lẻ' ? 'print' : '').then(res => {
        if (res == 'true') {
          this.updateImport();
        } else if (res == 'trueAndPrint') {
          this.updateImport('print');
        }
      });
    }
  }


  confirmCreate() {
    console.log('create', this.sendItem);
    // this.openPrint();

    this.AlertService.presentAlert2(`Bạn có chắc muốn thêm mới?`, this.DienGiai == 'Xuất bán lẻ' ? 'print' : '').then(res => {
      if (res == 'true') {
        this.createImport();
      } else if (res == 'trueAndPrint') {
        this.createImport('print');
      }
    });
  }

  createImport(check?) {

    this.LoadingService.setValue(true);
    this.XuatkhoService.createXuatHang(this.sendItem).subscribe((response: any) => {
      if (response.code == 0) {
        this.ToastService.successToast(response.message);
        this.submitForm = 0;
        this.resetItem();
        if (check == 'print') {
          this.getChungTuDetail2();
        }else{
          this.LoadingService.setValue(false);
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


  updateImport(check?) {
    this.LoadingService.setValue(true);
    this.XuatkhoService.updateXuatHang(this.sendItem).subscribe((response: any) => {
      console.log('response', response);
      if (response.code == 0) {
        this.ToastService.successToast(response.message);
        this.submitForm = 0;
        if (check == 'print') {
          this.getChungTuDetail2();
        }else{
          this.LoadingService.setValue(false);
        }
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

      this.printer.print(divContent).then((value: any) => {
        console.log('value:', value);
      }, (error) => {
        console.log('error:', error);
      });

    }, (err) => {
      console.log('Error', err);
    })
  }


  closeModal() {
    if (this.backPage == 'detail') {
      this.navController.navigateBack(['xuathang-detail'], {
        queryParams: {
          ChungTuID: this.chungchi.ChungTuID,
          nam_du_lieu: this.chungchi.nam_du_lieu,
          LoaiCTID: this.sendItem.LoaiCTID,
          DienGiai: this.DienGiai
        }
      });
    } else {
      this.navController.navigateBack(['xuathang'], {
        queryParams: {
          "LoaiCTID": this.sendItem.LoaiCTID,
          "DienGiai": this.DienGiai
        }
      });
    }
  }


  async openHttt() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: [
        {
          text: 'Tiền mặt',
          icon: 'cash-outline',
          handler: () => {
            this.send_httt = "TM";
            this.display_httt = "Tiền mặt";
          },
        },
        {
          text: 'Chuyển khoản',
          icon: 'qr-code-outline',
          handler: () => {
            this.send_httt = "CK";
            this.display_httt = "Chuyển khoản";
          },
        },

      ],
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }
}
