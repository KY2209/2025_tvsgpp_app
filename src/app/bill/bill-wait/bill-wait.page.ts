import { CurrencyPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/service/AlertService';
import { GlobalService } from 'src/app/service/global.service';
import { convertHelper } from 'src/app/share/helper';

@Component({
  selector: 'app-bill-wait',
  templateUrl: './bill-wait.page.html',
  styleUrls: ['./bill-wait.page.scss'],
})
export class BillWaitPage implements OnInit {
  LoaiCTID: number = 0;
  loainx: string = '';
  sumThanhTien: number = 0;
  listBillWait: any = [];
  LoaiCT: any = [];
  displayChiTietHang: any = [];
  listItem: any = [];
  isOpen: boolean[] = [];
  constructor(
    private actionSheetController: ActionSheetController,
    private currencyPipe: CurrencyPipe,
    private navParams: NavParams,
    private GlobalService: GlobalService,
    private AlertService: AlertService,
    public convertHelper: convertHelper
  ) {
    this.LoaiCTID = this.navParams.data.LoaiCTID;
    this.loainx = this.navParams.data.LoaiNX;
    console.log('this.loainx', this.loainx);

    if (this.loainx == "2_1") {
      this.listItem = JSON.parse(localStorage.getItem('billWaitNhapHang') || '[]');

    } else if (this.loainx == "4_1") {
      this.listItem = JSON.parse(localStorage.getItem('billWaitXuatHang') || '[]');

    }
    console.log('listItem', this.listItem);
    this.listBillWait = this.listItem;
    this.displayChiTietHang = this.listItem;
    // if(this.listItem[0]){
    //   for (let i = 0; i < this.listItem.length; i++) {
    //     if(this.listItem[i].LoaiNX == this.loainx){
    //       console.log('SoLuong', this.listItem[i].ChiTietHang[0].SoLuong);

    //       this.listBillWait.push(this.listItem[i]);
    //       this.displayChiTietHang.push(this.listItem[i]);
    //     }        
    //   }
    // }
    console.log('this.listBillWait', this.listBillWait);

    // this.listBillWait = JSON.parse(localStorage.getItem('billWait') || '[]'); 
    // this.displayChiTietHang = JSON.parse(localStorage.getItem('billWait') || '[]');
    // this.LoaiCT = JSON.parse(localStorage.getItem('LoaiCT') || '[]');

    this.sumBill();
    this.setTypeBill();
    console.log('this.displayChiTietHang listItem listItem', this.listItem);

  }

  ngOnInit() {
  }

  sumBill() {
    for (let i = 0; i < this.listBillWait.length; i++) {
      var sumMoney = 0;
      for (let j = 0; j < this.listBillWait[i].ChiTietHang.length; j++) {
        // if (typeof (this.displayChiTietHang[i].ChiTietHang[j].SoLuong) == 'number') {
        //   this.displayChiTietHang[i].ChiTietHang[j].SoLuong = new Intl.NumberFormat().format(this.listBillWait[i].ChiTietHang[j].SoLuong).replace(/\./g, ',');
        // }
        sumMoney = sumMoney + this.listBillWait[i].ChiTietHang[j].TongTien;
      }
      sumMoney -= this.listBillWait[i].ChietKhau;
      this.displayChiTietHang[i].sumMoney = sumMoney;
    }
  }

  setTypeBill() {
    for (let i = 0; i < this.displayChiTietHang.length; i++) {
      for (let j = 0; j < this.LoaiCT.length; j++) {
        if (this.displayChiTietHang[i].LoaiCTID == this.LoaiCT[j].LoaiCTID) {
          this.displayChiTietHang[i].LoaiCT_name = this.LoaiCT[j].DienGiai;
        }
      }
    }
  }

  async openTypeCT() {
    var listBtn = [];
    for (let i = 0; i < this.LoaiCT.length; i++) {
      listBtn.push({
        text: this.LoaiCT[i].DienGiai,
        icon: 'medical-outline',
        cssClass: this.LoaiCTID == this.LoaiCT[i].LoaiCTID ? 'buttonSheetOn' : 'buttonSheetOff',
        handler: () => {
          this.filterLoaiCTID();
          // this.sendChungtu.loaictid = this.LoaiCT[i].LoaiCTID;
          // this.title = this.LoaiCT[i].DienGiai;
        },
      })
    }


    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: listBtn

    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }


  filterLoaiCTID() {
    // var arrPlan = [];

    // this.listItemSearch.find((o: any, i: any) => {
    //   if (o.SoCT.toLowerCase().includes(this.keyword.toLowerCase()) == true) {
    //     arrPlan.push(this.listItemSearch[i]);
    //   }
    // });
    // this.listItem = arrPlan;
  }

  toggleOpen(index: number): void {
    this.isOpen[index] = !this.isOpen[index];
  }

  hoverItem(ChungTuID) {
    for (let i = 0; i < this.displayChiTietHang.length; i++) {
      if (this.displayChiTietHang[i].ChungTuID == ChungTuID) {
        this.displayChiTietHang[i].check = true;
      } else {
        this.displayChiTietHang[i].check = false;
      }
    }
  }

  async presentActionSheet(item, index) {
    console.log('this.listBillWait[index]', this.listBillWait[index]);

    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: [

        {
          text: 'Chọn hóa đơn',
          icon: 'reader-outline',
          handler: () => {
            this.handleBill(index);
          },
        },
        {
          text: 'Xóa hóa đơn',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.removeBill(index);
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

  handleBill(index) {
    // console.log('=============', this.listBillWait[index]);
    // console.log('this.listBillWait[index].DonGia ', this.listBillWait[index].DonGia);

    // for (let i = 0; i < this.listBillWait[index].ChiTietHang.length; i++) {
    //   console.log('this.listBillWait[index].ChiTietHang', this.listBillWait[index].ChiTietHang);
    //   console.log('this.listBillWait[index].ChiTietHang[i].DonGia', typeof(this.listBillWait[index].ChiTietHang[i].DonGia));
    //   console.log('this.listBillWait[index].ChiTietHang[i].DonGia', this.listBillWait[index].ChiTietHang[i].DonGia);
    //   console.log('this.listBillWait[index].ChiTietHang[i].SoLuong', this.listBillWait[index].ChiTietHang[i].SoLuong);

    //   // this.listBillWait[index].ChiTietHang[i].DonGia = Number(this.listBillWait[index].ChiTietHang[i].DonGia.replace(/,/g, ''));
    //   // this.listBillWait[index].ChiTietHang[i].SoLuong = Number(this.listBillWait[index].ChiTietHang[i].SoLuong.replace(/,/g, ''));
    // }
    this.GlobalService.closeModalSenData({
      'item': this.listBillWait[index]
    });

  }

  formatInput(index, index_child, type?, e?) {
    if (type && type == 'plus') {
      this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong) + 1;
      // this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = String(Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong.replace(/,/g, '')) + 1);
    }
    if (type && type == 'subtraction') {
      this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong) - 1;
      // this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = String(Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong.replace(/,/g, '')) - 1);
    }


    // var convNumber = this.currencyPipe.transform(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    // this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong = convNumber;
    if (typeof (this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong) == 'string') {
      this.listBillWait[index].ChiTietHang[index_child].SoLuong = Number(this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong);
    } else {
      this.listBillWait[index].ChiTietHang[index_child].SoLuong = this.displayChiTietHang[index].ChiTietHang[index_child].SoLuong;
    }

    // tính thành tiền của mỗi hàng hóa
    this.getTongTien(index, index_child);

    console.log('this.listBillWait', this.listBillWait);

  }



  getTongTien(index, index_child) {
    this.listBillWait[index].ChiTietHang[index_child].ThanhTien = this.listBillWait[index].ChiTietHang[index_child].SoLuong * this.listBillWait[index].ChiTietHang[index_child].DonGia;

    this.listBillWait[index].ChiTietHang[index_child].TongTien = this.listBillWait[index].ChiTietHang[index_child].ThanhTien + this.listBillWait[index].ChiTietHang[index_child].VAT - this.listBillWait[index].ChiTietHang[index_child].ChietKhau;
    this.displayChiTietHang[index].ChiTietHang[index_child].TongTien = this.listBillWait[index].ChiTietHang[index_child].TongTien;
    this.sumBill();

    // this.listItem.forEach(function (a) {
    //   var index = listItem.findIndex(function (b) {
    //     return b.MaVT == a.MaVT;
    //   });
    //   if (index !== -1) {
    //     listItem[index].check = true;
    //     listItem[index].SoLuong = new Intl.NumberFormat().format(a.SoLuong).replace(/\./g, ',');
    //   }
    // });
    for (let i = 0; i < this.listItem.length; i++) {
      if (this.listItem[i].ChungTuID == this.listBillWait[index].ChungTuID) {
        this.listItem[i] = this.listBillWait[index];
        localStorage.setItem('billWait', JSON.stringify(this.listItem));
        break;
      }
    }


    // this.countMoney(this.listBillWait);
  }


  countMoney(billDetail) {
    this.sumThanhTien = 0;
    console.log('billDetail', billDetail);

    for (let i = 0; i < billDetail.ChiTietHang.length; i++) {

      this.sumThanhTien = this.sumThanhTien + billDetail.ChiTietHang[i].ThanhTien;
      console.log('this.sumThanhTien', this.sumThanhTien);
      console.log('this.billDetail.ChiTietHang[i].ThanhTien', billDetail.ChiTietHang[i].ThanhTien);
    }
  }

  removeBill(index) {
    this.AlertService.presentAlert("Bạn có muốn xóa hóa đơn?").then(res => {
      if (res == 'true') {
        this.listBillWait.splice(index, 1);
        this.displayChiTietHang.splice(index, 1);
        localStorage.setItem('billWait', JSON.stringify(this.listBillWait));
      }
    })
  }

  closeModal() {
    this.GlobalService.closeModal();
  }
}
