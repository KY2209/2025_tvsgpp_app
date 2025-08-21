import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavParams, PopoverController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { VattuService } from 'src/app/service/vattu.service';
import { DVTComponent } from 'src/app/donvitinh/dvt/dvt.component';
import { GroupProductPage } from 'src/app/share/group-product/group-product.page';
import { HangSanXuatPage } from 'src/app/share/hang-san-xuat/hang-san-xuat.page';
import { convertHelper } from 'src/app/share/helper';
import { NuocSanXuatPage } from 'src/app/share/nuoc-san-xuat/nuoc-san-xuat.page';
import { DvtCreatePage } from 'src/app/donvitinh/dvt-create/dvt-create.page';
import { AlertService } from 'src/app/service/AlertService';
import { ToastService } from 'src/app/service/toastService';
import { VattuQuocgiaPage } from '../vattu-quocgia/vattu-quocgia.page';

@Component({
  selector: 'app-vattu-create',
  templateUrl: './vattu-create.page.html',
  styleUrls: ['./vattu-create.page.scss'],
})
export class VattuCreatePage implements OnInit {
  typeProduct: any = [];
  sendItem: any = {
    "LoaiVT": "THUOC",
    "NhomVT": "",
    "VatTuID": 0,
    "MaDuocQG": "",
    "TenVT": "",
    "MaVach": "",
    "SoDangKy": "",
    "DVT": "",
    "GiaMua": 0,
    "GiaBanLe": 0,
    "GiaBanSy": "",
    "HoatChatChinh": "",
    "HamLuong": "",
    "LieuDung": "",
    "CachDung": "",
    "DuongDung": "",
    "QuyCach": "",
    "HangSanXuat": "",
    "NuocSanXuat": "",
    "TichDiem": 0,
    "DVTQD": [],
    "Img": ""
  }
  isSubmit: boolean = false;
  LoaiVT_name: string = 'Thuốc';
  isCreate: string = '';
  vatTuId: string = '0';
  GiaMuaConv: string = '';
  GiaBanLeConv: string = '';
  GiaBanSyConv: string = '';
  listDVT: any = [];
  listDVTRemove: any = [];
  listDVTConv: any = [];
  reloadParent: boolean = false;
  displayImg: boolean = false;

  constructor(
    private GlobalService: GlobalService,
    private modalController: ModalController,
    private currencyPipe: CurrencyPipe,
    private LoadingService: LoadingService,
    private actionSheetController: ActionSheetController,
    private VattuService: VattuService,
    private navParams: NavParams,
    private AlertService: AlertService,
    public popoverController: PopoverController,
    public convertHelper: convertHelper,
    private ToastService: ToastService,

  ) {
    this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');

  }

  // ionViewDidEnter() { }

  ngOnInit() {
    this.typeProduct = this.convertHelper.typeProduct();
    if (this.isCreate == 'false') {
      this.vattuDetail();
      // this.getDVTByVT();
    }
  }


  vattuDetail() {
    this.LoadingService.setValue(true);

    this.VattuService.detailVattu(this.vatTuId).subscribe((response: any) => {
      this.sendItem = {
        "LoaiVT": response[0].LoaiVT ? response[0].LoaiVT : "THUOC",
        "NhomVT": response[0].NhomVT,
        "VatTuID": response[0].VatTuID,
        "MaDuocQG": response[0].MaDuocQG ? response[0].MaDuocQG : "",
        "TenVT": response[0].TenVT,
        "MaVach": response[0].MaVach,
        "SoDangKy": response[0].SoDangKy,
        "DVT": response[0].DVT,
        "GiaMua": response[0].GiaMua,
        "GiaBanLe": response[0].GiaBanLe,
        "GiaBanSy": response[0].GiaBanSy,
        "HoatChatChinh": response[0].HoatChatChinh,
        "HamLuong": response[0].HamLuong,
        "LieuDung": response[0].LieuDung,
        "CachDung": response[0].CachDung,
        "DuongDung": response[0].DuongDung,
        "QuyCach": response[0].QuyCach,
        "HangSanXuat": response[0].HangSanXuat,
        "NuocSanXuat": response[0].NuocSanXuat,
        "Img": response[0].Img,
        "TichDiem": response[0].TichDiem
      }

      this.getDVTByVT(response[0].DVTQD);
      this.GiaMuaConv = this.formatNumber(response[0].GiaMua);
      this.GiaBanLeConv = this.formatNumber(response[0].GiaBanLe);
      this.GiaBanSyConv = this.formatNumber(response[0].GiaBanSy);
      this.typeProduct.find((o) => {
        if (o.value == response[0].LoaiVT) {
          this.LoaiVT_name = o.item;
        }
      })
      // this.listDataSearch = response;
      this.LoadingService.setValue(false);

    }, (error) => {
      this.LoadingService.setValue(false);
      console.log('error', error);
    });
  }

  getDVTByVT(response) {
    this.listDVT = [...response];
    const test = JSON.parse(JSON.stringify(response));
    for (let i = 0; i < test.length; i++) {
      test[i].GiaMua = this.formatNumber(test[i].GiaMua);
      test[i].GiaBanLe = this.formatNumber(test[i].GiaBanLe);
      test[i].GiaBanSy = this.formatNumber(test[i].GiaBanSy);
    }
    this.listDVTConv = test;
    this.LoadingService.setValue(false);
  }

  onChange(event: any) {
    var file = event.target.files[0];
    if (file) {
      this.convertHelper.convertFileToBase64(file).then((base64: string) => {
        let index = base64.indexOf(",");
        this.sendItem.Img = base64.substring(index + 1);
        // console.log('base64', this.sendItem.Img);

        // Bạn có thể lưu trữ hoặc sử dụng chuỗi Base64 tại đây
      }).catch(error => {
        console.error('Error converting file to Base64', error);
      });
    } else {
      console.error('No file selected');
    }
  }

  formatNumber(number) {
    return number ? this.currencyPipe.transform(String(number).replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0') : "0";

  }

  resetItem() {
    this.GiaMuaConv = '';
    this.GiaBanLeConv = '';
    this.GiaBanSyConv = '';
    this.listDVT = [];
    this.LoaiVT_name = 'Thuốc';
    this.listDVTRemove = [];
    this.listDVTConv = [];
    this.isSubmit = false;

    this.sendItem = {
      "LoaiVT": "THUOC",
      "NhomVT": "",
      "VatTuID": 0,
      "MaDuocQG": "",
      "TenVT": "",
      "MaVach": "",
      "SoDangKy": "",
      "DVT": "",
      "GiaMua": 0,
      "GiaBanLe": 0,
      "GiaBanSy": "",
      "HoatChatChinh": "",
      "HamLuong": "",
      "LieuDung": "",
      "CachDung": "",
      "DuongDung": "",
      "QuyCach": "",
      "HangSanXuat": "",
      "NuocSanXuat": "",
      "Img": "",
      "TichDiem": 0,
      "DVTQD": []
    }
  }

  formatInput(item, e) {
    var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    this[item + 'Conv'] = convNumber;
    // this.GiaBanLeConv = convNumber;
    this.sendItem[item] = Number(e.replace(/,/g, ''));
  }

  formatInputDVT(item, index, e) {
    var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    // this[item + 'Conv'] = convNumber;
    // this.GiaBanLeConv = convNumber;
    this.listDVTConv[index][item] = convNumber;
    this.listDVT[index][item] = Number(e.replace(/,/g, ''));

    // console.log('convNumber', convNumber, item + 'Conv');

  }

  async handleGroupProduct() {
    const modal = await this.modalController.create({
      component: GroupProductPage,
      cssClass: 'modalOpen',
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.sendItem.NhomVT = dataReturned.data;
      }
    });
    return await modal.present();
  }

  async handleHangSX() {
    const modal = await this.modalController.create({
      component: HangSanXuatPage,
      cssClass: 'modalOpen',
      componentProps: {
        // "listUnit": this.listUnit,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.sendItem.HangSanXuat = dataReturned.data;
      }
    });
    return await modal.present();
  }

  async handleNuocSX() {
    const modal = await this.modalController.create({
      component: NuocSanXuatPage,
      cssClass: 'modalOpen',
      componentProps: {
        // "listUnit": this.listUnit,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {

      if (dataReturned.data) {
        this.sendItem.NuocSanXuat = dataReturned.data;

      }
    });
    return await modal.present();
  }

  async handleLoaiHang() {
    var listbtn = [];
    for (let i = 0; i < this.typeProduct.length; i++) {
      listbtn.push({
        text: this.typeProduct[i].item,
        icon: 'medkit-outline',
        // cssClass: this.HTTT_name == 'Tiền mặt' ? 'buttonSheetOn' : 'buttonSheetOff',
        handler: () => {
          this.LoaiVT_name = this.typeProduct[i].item;
          this.sendItem.LoaiVT = this.typeProduct[i].value;
          // this.HTTT_name = 'Tiền mặt'
        }
      })
    }


    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: listbtn
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  async changeCalculation() {
    const modal = await this.modalController.create({
      component: DvtCreatePage,
      cssClass: 'halfModal3',
      componentProps: {
        // "listUnit": this.listUnit,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {

      if (dataReturned.data) {
        this.listDVT.push(dataReturned.data.item);
        this.listDVTConv.push(dataReturned.data.itemConv);
      }
    });
    return await modal.present();
  }

  handleProduct() {


    this.isSubmit = true;
    if (!this.sendItem.TenVT || !this.sendItem.DVT) {
      this.ToastService.warningToast("Vui lòng điền đầy đủ thông tin!")
      return;
    }

    if (this.sendItem.TichDiem == true || this.sendItem.TichDiem == false) {
      this.sendItem.TichDiem = this.sendItem.TichDiem ? 1 : 0;
    }
    // console.log('listDVT', this.listDVT);
    // console.log('listDVTConv', this.listDVTConv);
    this.sendItem.DVTQD = this.listDVT;
    console.log('ffffffff', this.sendItem);
    // console.log('this.listDVT', this.listDVT);
    this.AlertService.presentAlert(`Xác nhận lưu vật tư?`).then(res => {
      if (res == 'true') {
        this.LoadingService.setValue(true);
        this.VattuService.createVattu(this.sendItem).subscribe((response: any) => {
          this.reloadParent = true;
          console.log("342", response)
          if (response[0].VatTuID) {
            //   if(this.listDVT){
            //     this.handleDVT('listDVT', response[0].MaVT);
            //   }
            if (this.listDVTRemove) {
              this.handleDVT('listDVTRemove');
            }
            this.ToastService.successToast("Lưu vật tư thành công!");

            if (this.isCreate == 'true') {
              // setTimeout(() => {
              this.resetItem();
              // }, 2000);
            }
          } else {
            this.ToastService.errorToast("Không thể lưu vật tư!");
          }
          this.LoadingService.setValue(false);

        }, (error) => {
          setTimeout(() => {
            this.ToastService.errorToast("Không thể lưu vật tư!");

            this.LoadingService.setValue(false);
            console.log('error', error);
          }, 1000);
        });
      }
    });
  }

  confirmRemove(item, index) {
    if (this.listDVT[index].DonViTinhID) {
      this.listDVTRemove.push(this.listDVT[index]);
    }
    this.listDVT.splice(index, 1);
    this.listDVTConv.splice(index, 1);
  }

  handleDVT(item) {
    for (let i = 0; i < this.listDVTRemove.length; i++) {
      this.removeDVT(this[item][i].DonViTinhID);
    }
  }

  // updateDVT(item) {
  //   this.VattuService.createDVT(item).subscribe((response: any) => {
  //     console.log('response', response);

  //   }, (error) => {
  //     setTimeout(() => {
  //       console.log('error', error);
  //     }, 1000);
  //   });
  // }

  removeDVT(DonViTinhID) {
    this.VattuService.deleteDVT(DonViTinhID).subscribe((response: any) => {
    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
      }, 1000);
    });
  }


  closeModal() {
    if (this.reloadParent) {
      this.GlobalService.closeModalSenData('reload');
    } else {
      this.GlobalService.closeModal();
    }
  }

  async handleProductCountry() {
    const modal = await this.modalController.create({
      component: VattuQuocgiaPage,
      cssClass: 'modalOpen',
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {

      if (dataReturned.data) {
        this.sendItem.MaDuocQG = dataReturned.data.MaDuocQG;
        this.sendItem.DVT = dataReturned.data.DVT;
        this.sendItem.HamLuong = dataReturned.data.HamLuong;
        this.sendItem.HangSanXuat = dataReturned.data.HangSX;
        this.sendItem.HoatChatChinh = dataReturned.data.HoatChatChinh;
        this.sendItem.NuocSanXuat = dataReturned.data.NuocSX;
        this.sendItem.QuyCach = dataReturned.data.QuyCach;
        this.sendItem.SoDangKy = dataReturned.data.SoDangKy;
        this.sendItem.TenVT = dataReturned.data.TenVT;
      }
    });
    return await modal.present();
  }










}
