import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { KhoService } from 'src/app/service/kho.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
@Component({
  selector: 'app-kho-create',
  templateUrl: './kho-create.page.html',
  styleUrls: ['./kho-create.page.scss'],
})
export class KhoCreatePage implements OnInit {
  @Input() isCreate: string = '';
  @Input() KhoItem: any = {};

  sendItem: any = {
    "OfficeID": 0,
    "KhoID": 0,
    "TenKho": "",
    "DiaChi": ""
  };
  submit: boolean = false;


  constructor(
    private GlobalService: GlobalService,
    private route: ActivatedRoute,
    private LoadingService: LoadingService,
    private KhoService: KhoService,
    private ToastService: ToastService,
    public actionSheetController: ActionSheetController

  ) {

  }

  ngOnInit() {
    if (this.isCreate == 'false') {
      this.sendItem = this.KhoItem;
      console.log('KhoItem', this.KhoItem);
    }

    this.sendItem.officeId = Number(localStorage.getItem("officeId"));
  }

  confirmSubmit() {
    console.log('this.sendItem', this.sendItem);

    this.submit = true;
    if (!this.sendItem.TenKho) {
      return;
    }

    this.LoadingService.setValue(true);

    this.KhoService.createKho(this.sendItem).subscribe((response: any) => {
      console.log('response', response);
      this.ToastService.successToast('Cập nhật thành công!')
      if (this.isCreate == 'true') {
        this.formatItem();
      }
      this.LoadingService.setValue(false);

    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
      }, 1000);
    });
  }


  formatItem() {
    this.submit = false;

    this.sendItem = {
      "OfficeID": 0,
      "KhoID": 0,
      "TenKho": "",
      "DiaChi": ""
    };
  }

  closeModal() {
    this.GlobalService.closeModal();

  }
}
