import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  typePaper: string = 'A5';
  listNhaphang: any = [];
  listBanle: any = [];
  loaiNHDefault: any = {};
  loaiBLDefault: any = {};
  displayImg: boolean;
  displayLienThong: boolean;
  constructor(
    private navController: NavController,
    private actionSheetController: ActionSheetController,

  ) {
    this.typePaper = localStorage.getItem('setting') ? localStorage.getItem('setting') : 'A5';
    this.listNhaphang = JSON.parse(localStorage.getItem('loaiNhapHang') || '[]');
    this.listBanle = JSON.parse(localStorage.getItem('loaiBanle') || '[]');
    this.loaiNHDefault = JSON.parse(localStorage.getItem('LoaiNhapHangDefault') || null);
    this.loaiBLDefault = JSON.parse(localStorage.getItem('LoaiBanLeDefault') || null);
    this.displayImg = JSON.parse(localStorage.getItem('displayImg') || 'false');
    this.displayLienThong = JSON.parse(localStorage.getItem('displayLienThong') || 'false');
    
    console.log('this.displayImg', this.displayImg);
    
    if (!this.loaiNHDefault) {
      this.loaiNHDefault = this.listNhaphang[0];
    }
    if (!this.loaiBLDefault) {
      this.loaiBLDefault = this.listBanle[0];
    }
  }

  ngOnInit() { }

  handleTypePaper(type) {
    this.typePaper = type;
    localStorage.setItem('setting', this.typePaper);
  }

  async handleNhapHang() {
    var arrBtn = [];
    for (let i = 0; i < this.listNhaphang.length; i++) {
      arrBtn.push({
        text: this.listNhaphang[i].DienGiai,
        icon: 'cash-outline',
        cssClass: this.loaiNHDefault.DienGiai == this.listNhaphang[i].DienGiai ? 'buttonSheetOn' : 'buttonSheetOff',
        handler: () => {
          localStorage.setItem('LoaiNhapHangDefault', JSON.stringify(this.listNhaphang[i]));
          this.loaiNHDefault = this.listNhaphang[i];
          // đưa phần tử đã chọn lên đầu mảng và lưu vào, thay thế cho loaiNhapHang
          let element = this.listNhaphang.splice(i, 1)[0];
          this.listNhaphang.unshift(element);
          localStorage.setItem('loaiNhapHang', JSON.stringify(this.listNhaphang));
          console.log('this.listNhaphang', this.listNhaphang);
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

  async handleBanLe() {
    var arrBtn = [];
    for (let i = 0; i < this.listBanle.length; i++) {
      arrBtn.push({
        text: this.listBanle[i].DienGiai,
        icon: 'cash-outline',
        cssClass: this.loaiBLDefault.DienGiai == this.listBanle[i].DienGiai ? 'buttonSheetOn' : 'buttonSheetOff',
        handler: () => {
          localStorage.setItem('LoaiBanLeDefault', JSON.stringify(this.listBanle[i]));
          this.loaiBLDefault = this.listBanle[i];
          // đưa phần tử đã chọn lên đầu mảng và lưu vào, thay thế cho loaiNhapHang
          let element = this.listBanle.splice(i, 1)[0];
          this.listBanle.unshift(element);
          localStorage.setItem('loaiBanle', JSON.stringify(this.listBanle));
          console.log('this.listBanle', this.listBanle);

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

  handleDisplayImg(){
    this.displayImg = !this.displayImg;
    localStorage.setItem('displayImg', String(this.displayImg));
  }

  handleLienThong(){
    this.displayLienThong = !this.displayLienThong;
    localStorage.setItem('displayLienThong', String(this.displayLienThong));
  }

  openBack() {
    this.navController.navigateBack(['tabs/tab3']);
  }
}
