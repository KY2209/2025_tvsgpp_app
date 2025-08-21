import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { VattuIndexPage } from 'src/app/vattu/vattu-index/vattu-index.page';
import { CurrencyPipe, DecimalPipe } from '@angular/common';
import { AlertService } from 'src/app/service/AlertService';
import { LoadingService } from 'src/app/service/loading.service';

@Component({
  selector: 'app-xuathang-item',
  templateUrl: './xuathang-item.component.html',
  styleUrls: ['./xuathang-item.component.scss'],
})
export class XuathangItemComponent implements OnInit {
  @Input() makho: any = [];
  @Input() listVattu: any = [];
  @Input() banggia: string = '';
  @Input() index: number = 0;
  @Input() submitForm: number = 0;
  @Input() indexOpen: number = 0;
  @Input() data: any = '';
  @Input() httt: string = '';
  @Input() isCreate: any = true;
  @Output() sendData = new EventEmitter();
  @Output() sendIndex = new EventEmitter();
  @Output() sendDelete = new EventEmitter();
  
  formattedNumber: string = '';
  tenHang: string = '';
  ThanhTien: number = 0;
  sendItem = {
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

  displayItem = {
    "NhapXuatID": 0,
    "MaVT": "",
    "DVT": "",
    "SoLuong": "",
    "DonGia": "",
    "GiaBanLe": "",
    "GiaBanSy": "",
    "ThanhTien": "",
    "VAT_Percent": "",
    "VAT": "",
    "ChietKhau_Percent": "",
    "ChietKhau": "",
    "TongTien": "",
    "HTTT": "Tiền mặt",
    "LoHang": "",
    "HanDung": ""
  }
  checkOpen: boolean = false;
  constructor(
    public modalController: ModalController,
    private currencyPipe: CurrencyPipe,
    private actionSheetController: ActionSheetController,
    private AlertService: AlertService,
    private LoadingService: LoadingService
  ) {

  }

  ngOnChanges(changes: any) {
    if (changes.makho) {
      this.makho = changes.makho.currentValue;
    }

    if (changes.banggia) {
      this.banggia = changes.banggia.currentValue;
    }

    if (changes.submitForm) {
      this.submitForm = changes.submitForm.currentValue;
    }
    if (changes.httt) {
      this.sendItem.HTTT = changes.httt.currentValue;
    }
    if (changes.listVattu) {
      this.listVattu = changes.listVattu.currentValue;
    }
    
    
    if (changes.data) {
      // console.log('this.isCreate', this.isCreate);
      
      if(this.isCreate == 'false' && changes.data.currentValue.DonGia){
        var data = changes.data.currentValue;
        // console.log('changes.submitForm.data;', changes.data.currentValue);
        this.tenHang = data._TenVT;
  
        this.sendItem.DonGia = data.DonGia;
        this.sendItem.HanDung = data.HanDung ? data.HanDung : '';
        this.sendItem.LoHang = data.LoHang? data.LoHang : '';
        this.sendItem.MaVT = data.MaVT;
        this.sendItem.DVT = data.DVT;
        this.sendItem.GiaBanLe = data.GiaBanLe ? data.GiaBanLe : 0;
        this.sendItem.GiaBanSy = data.GiaBanSy ? data.GiaBanSy : 0;
        this.sendItem.ChietKhau = data.ChietKhau;
        this.sendItem.ChietKhau_Percent = data.ChietKhau_Percent;
        this.sendItem.HTTT = data.HTTT ? data.HTTT : '';
        this.sendItem.SoLuong = data.SoLuong;
        this.sendItem.ThanhTien = data.ThanhTien;
        this.ThanhTien = data.ThanhTien;
        this.sendItem.TongTien = data.TongTien;
        this.sendItem.VAT_Percent = data.VAT_Percent;
        this.sendItem.VAT = data.VAT;
        this.sendItem.NhapXuatID = data.NhapXuatID;

        this.displayItem.DonGia = new Intl.NumberFormat().format(data.DonGia).replace(/\./g, ',');
        this.displayItem.HanDung = data.HanDung;
        this.displayItem.LoHang = data.LoHang;
        this.displayItem.MaVT = data.MaVT;
        this.displayItem.DVT = data.DVT;
        this.displayItem.GiaBanLe = data.GiaBanLe ? new Intl.NumberFormat().format(data.GiaBanLe).replace(/\./g, ',') : '0';
        this.displayItem.GiaBanSy = data.GiaBanSy ? new Intl.NumberFormat().format(data.GiaBanSy).replace(/\./g, ',') : '0';
        this.displayItem.SoLuong = new Intl.NumberFormat().format(data.SoLuong).replace(/\./g, ',');
        this.displayItem.ChietKhau = data.ChietKhau ? new Intl.NumberFormat().format(data.ChietKhau).replace(/\./g, ',') : '0';
        this.displayItem.ChietKhau_Percent = data.ChietKhau_Percent;
        this.displayItem.HTTT = !data.HTTT ? '' : data.HTTT == 'TM' ? 'Tiền mặt' : 'Chuyển khoản';
        // this.displayItem.SoLuong = data.SoLuong;
        this.displayItem.ThanhTien = data.ThanhTien ? new Intl.NumberFormat().format(data.ThanhTien).replace(/\./g, ',') : '0';
        this.displayItem.TongTien = data.TongTien ? new Intl.NumberFormat().format(data.TongTien).replace(/\./g, ',') : '0';
        this.displayItem.VAT_Percent = data.VAT_Percent;
        this.displayItem.VAT = data.VAT ? new Intl.NumberFormat().format(data.VAT).replace(/\./g, ',') : '0';
        this.senData();
      }else{
        this.checkOpen = true;
      }
    }

    if (changes.indexOpen) {
      if(changes.indexOpen.currentValue == this.index){
        this.checkOpen = true;
      }else{
        this.checkOpen = false;
      }
    }
  }

  ngOnInit() { }

  async openVattu() {
    if (!this.makho) {
      return;
    }
    // this.LoadingService.setValue(true);

    const modal = await this.modalController.create({
      component: VattuIndexPage,
      cssClass: 'modalOpen',
      componentProps: {
        "makho": this.makho,
        "banggia": this.banggia,
        "listVattu": this.listVattu,
      },
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.tenHang = dataReturned.data.TenVT;
        this.sendItem.DonGia = dataReturned.data.DonGia ? dataReturned.data.DonGia : 0;
        this.sendItem.HanDung = dataReturned.data.HanDung ? dataReturned.data.HanDung : '';
        this.sendItem.LoHang = dataReturned.data.LoHang ? dataReturned.data.LoHang : '';
        this.sendItem.MaVT = dataReturned.data.MaVT;
        this.sendItem.DVT = dataReturned.data.DVT;
        this.sendItem.GiaBanLe = dataReturned.data.GiaBanLe ? dataReturned.data.GiaBanLe : 0;
        this.sendItem.GiaBanSy = dataReturned.data.GiaBanSy ? dataReturned.data.GiaBanSy : 0;

        this.displayItem.DonGia = new Intl.NumberFormat().format(dataReturned.data.DonGia).replace(/\./g, ',');
        this.displayItem.HanDung = dataReturned.data.HanDung;
        this.displayItem.LoHang = dataReturned.data.LoHang;
        this.displayItem.MaVT = dataReturned.data.MaVT;
        this.displayItem.DVT = dataReturned.data.DVT;
        this.displayItem.GiaBanLe = new Intl.NumberFormat().format(dataReturned.data.GiaBanLe).replace(/\./g, ',');
        this.displayItem.GiaBanSy = new Intl.NumberFormat().format(dataReturned.data.GiaBanSy).replace(/\./g, ',');
        this.senData();
      }
    });
    return await modal.present();
  }


  formatInput(item) {
    var convNumber = this.currencyPipe.transform(this.displayItem[item].replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    this.displayItem[item] = convNumber;
    this.sendItem[item] = Number(convNumber.replace(/,/g, ''));

    if (this.sendItem.SoLuong) {
      this.sendItem.ThanhTien = this.sendItem.SoLuong * this.sendItem.DonGia;
      this.ThanhTien = this.sendItem.SoLuong * this.sendItem.DonGia;
      this.displayItem.ThanhTien = new Intl.NumberFormat().format(this.sendItem.ThanhTien).replace(/\./g, ',');
      this.getTongTien();
    }
  }

  convSendData(item) {
    this.sendItem[item] = Number(this.displayItem[item]);

    if (item == "ChietKhau_Percent") {
      this.sendItem.ChietKhau = this.ThanhTien * this.sendItem.ChietKhau_Percent / 100;
      this.displayItem.ChietKhau = new Intl.NumberFormat().format(this.sendItem.ChietKhau).replace(/\./g, ',');

      // console.log('this.sendItem.ChietKhau', this.sendItem.ChietKhau);
      // console.log('this.sendItem.ThanhTien;', this.sendItem.ThanhTien);
      // console.log('this.sendItem.ChietKhau_Percent', this.sendItem.ChietKhau_Percent);
      this.getTongTien();
    }

    if (item == "VAT_Percent") {
      this.sendItem.VAT = this.ThanhTien * this.sendItem.VAT_Percent / 100;
      this.displayItem.VAT = new Intl.NumberFormat().format(this.sendItem.VAT).replace(/\./g, ',');
      this.getTongTien();
    }


  }

  getTongTien() {
    this.sendItem.TongTien = this.ThanhTien + this.sendItem.VAT - this.sendItem.ChietKhau;
    this.displayItem.TongTien = new Intl.NumberFormat().format(this.sendItem.TongTien).replace(/\./g, ',');
  }

  senData(e?) {
    this.sendData.emit({
      'item': this.sendItem,
      'index': this.index
    });
  }

  changeCheck(){
    this.checkOpen = !this.checkOpen;
    this.sendIndex.emit({
      'index': this.index
    });
  }

  deleteForm(){
    this.AlertService.presentAlert(`Bạn có chắc muốn xóa hàng hóa ${this.index + 1}?`).then(res => {
      if (res == 'true') {
        console.log('eeee');
        this.sendDelete.emit({
          'index': this.index
        });
      }
    });
  }
}
