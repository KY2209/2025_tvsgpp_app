import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';

@Component({
  selector: 'app-dvt-create',
  templateUrl: './dvt-create.page.html',
  styleUrls: ['./dvt-create.page.scss'],
})
export class DvtCreatePage implements OnInit {
  sendItem: any = {
    "DonViTinhID": 0,
    "DVT": "",
    "GiaMua": 0,
    "GiaBanLe": 0,
    "GiaBanSy": 0,
    "SoLuongQuyDoi": 1
  }

  sendItemConv: any = {
    "DVT": "",
    "GiaMua": "",
    "GiaBanLe": "",
    "GiaBanSy": "",
    "SoLuongQuyDoi": 1
  }
  submit: boolean = false;
  // GiaMuaConv: string = '';
  // GiaBanLeConv: string = '';
  // GiaBanSyConv: string = '';
  constructor(
    private GlobalService: GlobalService,
    private currencyPipe: CurrencyPipe,
    private route: ActivatedRoute,
    private LoadingService: LoadingService,
    private ToastService: ToastService,
  ) { }

  ngOnInit() {
  }

  formatInput(item, e) {
    var convNumber = this.currencyPipe.transform(e.replace(/\D/g, '').replace(/^0+/, ''), ' ', 'symbol', '1.0-0')
    this.sendItemConv[item] = convNumber;
    // this.GiaBanLeConv = convNumber;
    this.sendItem[item] = Number(e.replace(/,/g, ''));

    console.log('convNumber', convNumber);
    console.log('this.sendItemConv', this.sendItemConv);

  }

  confirmSubmit() {
    this.sendItemConv.SoLuongQuyDoi = this.sendItem.SoLuongQuyDoi;
    this.submit = true;
    if(!this.sendItem.DVT){
      return;
    }
    console.log('this.sendItem.DVT', this.sendItem.DVT);
    
    this.sendItemConv.DVT = this.sendItem.DVT;
    // console.log('sendItem', this.sendItem);
    this.GlobalService.closeModalSenData({
      'item': this.sendItem,
      'itemConv': this.sendItemConv
    });

  }

  closeModal() {
    this.GlobalService.closeModal();

  }
}
