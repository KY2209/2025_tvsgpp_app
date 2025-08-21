import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { XuatkhoService } from 'src/app/service/xuatkho.service';
import { convertHelper } from '../helper';

@Component({
  selector: 'app-print-bill',
  templateUrl: './print-bill.component.html',
  styleUrls: ['./print-bill.component.scss'],
})
export class PrintBillComponent implements OnInit {
  @Input() ChungTuInfo: any = {};
  @Input() data: any = {};

  itemDetail: any = [];
  sumThanhTien: number = 0;
  tenCongTy: string = '';
  diaChi: string = '';
  dienthoai: string = '';
  maQR: string = '';
  convStringTT: string = '';
  check: number = 0;
  typePaper: string = '';
  sumTongTien: number = 0;
  sumVAT: number = 0;
  sumChietKhau: number = 0;
  constructor(
    private XuatkhoService: XuatkhoService,
    private cdr: ChangeDetectorRef,
    private convertHelper: convertHelper,
  ) {

  }

  ngOnInit() {
    this.getHeThong();
    this.typePaper = localStorage.getItem('setting') ? localStorage.getItem('setting') : 'A5';
    // console.log('typePaper', this.typePaper);


  }

  ngOnChanges(changes: any) {

    if (changes.ChungTuInfo) {
      // console.log('changes.ChungTuInfo', changes.ChungTuInfo.currentValue);
      this.ChungTuInfo = changes.ChungTuInfo.currentValue;
      if (this.ChungTuInfo.ChungTuID) {
        this.sumThanhTien = 0;
        this.getChungTuDetail();
      }
    }
    if (changes.data && changes.data.currentValue) {
      // setTimeout(() => {
        this.cdr.detectChanges();

        this.itemDetail = changes.data.currentValue;
        this.cdr.detectChanges();

        this.sumThanhTien = 0;
        if(this.itemDetail.LoaiCTID){
          this.countMoney();
        }
      // }, 3000);
    }
  }

  getHeThong() {
    // this.XuatkhoService.heThong().subscribe((response: any) => {
      // console.log('response12343434', response);
      var HeThong = JSON.parse(localStorage.getItem('HeThong') || '[]');

      for (let i = 0; i < HeThong.length; i++) {
        if (HeThong[i].INIOption == "inpTenCongTy") {
          this.tenCongTy = HeThong[i].INIValue;
        }

        if (HeThong[i].INIOption == "inpDiaChiCongTy") {
          this.diaChi = HeThong[i].INIValue;
        }

        if (HeThong[i].INIOption == "imgQRCode") {
          this.maQR = HeThong[i].INIValue;
        }

        if (HeThong[i].INIOption == "inpDienThoai") {
          this.dienthoai = HeThong[i].INIValue;
        }

      }
  }


  getChungTuDetail() {
    this.XuatkhoService.xuatHangDetail(this.ChungTuInfo).subscribe((response: any) => {

      this.itemDetail = response[0];

      // console.log('response1111', response[0]);
      if (response[0]) {
        this.countMoney();

      }
    }, (error) => {
      console.log('error', error);
    });
  }

  countMoney() {
    // console.log('this.itemDetail', this.itemDetail);
    this.sumThanhTien = 0;
    this.sumTongTien = 0;
    this.convStringTT = '';
    this.sumVAT = 0;
    this.sumChietKhau = 0;

    for (let i = 0; i < this.itemDetail?.ChiTietHang.length; i++) {
      this.sumThanhTien = this.sumThanhTien + this.itemDetail.ChiTietHang[i].ThanhTien;
      this.sumTongTien = this.sumTongTien + this.itemDetail.ChiTietHang[i].TongTien;
      this.convStringTT = this.convertHelper.to_vietnamese(this.sumTongTien)

      this.sumVAT = this.sumVAT + this.itemDetail.ChiTietHang[i].VAT;
      this.sumChietKhau = this.sumChietKhau + this.itemDetail.ChiTietHang[i].ChietKhau;
      // this.sumThanhToan = this.sumThanhToan + this.itemDetail.ChiTietHang[i].ThanhToan;
    }
    this.cdr.detectChanges();

  }



}
