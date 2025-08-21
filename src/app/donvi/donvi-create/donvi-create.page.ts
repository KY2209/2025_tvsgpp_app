import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
import { UnitService } from 'src/app/service/unit.service';

@Component({
  selector: 'app-donvi-create',
  templateUrl: './donvi-create.page.html',
  styleUrls: ['./donvi-create.page.scss'],
})
export class DonviCreatePage implements OnInit {
  @Input() isCreate: string = '';
  @Input() DonViItem: any = {};
  @Input() page: string = ''
  @Input() listPhone: any = [];

  sendItem: any = {
    "DonViID": 0,
    "LoaiDV": "NCC",
    "NhomDV": "",
    "MaGPP": "",
    "TenDV": "",
    "DiaChi": "",
    "DienThoai": ""
  };
  loaiDV: string = 'Nhà cung cấp'
  // isCreate: string = '';
  submit: boolean = false;

  constructor(
    private GlobalService: GlobalService,
    private route: ActivatedRoute,
    private LoadingService: LoadingService,
    private UnitService: UnitService,
    private ToastService: ToastService,
    public actionSheetController: ActionSheetController

  ) {

  }

  ngOnInit() {
    if (this.page == 'xuatbanle') {
      this.loaiDV = 'Khách hàng';
      this.sendItem.LoaiDV = 'KH';
    }

    if (this.isCreate == 'false') {
      this.sendItem = this.DonViItem;
      this.loaiDV = this.DonViItem.LoaiDV == "NCC" ? 'Nhà cung cấp' : 'Khách hàng';
      this.DonViItem.NhomDV = this.DonViItem.LoaiDV ? this.DonViItem.LoaiDV : '';

    }


  }

  confirmSubmit() {
    var checkPhone = false;
    this.submit = true;
    if (!this.sendItem.TenDV) {
      return;
    }

    if(this.sendItem.DienThoai) {

      this.listPhone.find((o: string) => {
        if (o == this.sendItem.DienThoai) {
          checkPhone = true;
        }
      })
    }

    if(checkPhone){
      this.ToastService.warningToast("Số điện thoại đã tồn tại!");
      return;
    }

    this.LoadingService.setValue(true);

    this.UnitService.createUnit(this.sendItem).subscribe((response: any) => {
      this.ToastService.successToast('Thêm đơn vị thành công!')
      if (this.isCreate == 'true') {
        this.formatItem();
        this.GlobalService.closeModalSenData('reload');
      }
      this.LoadingService.setValue(false);

    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
        this.LoadingService.setValue(false);

      }, 1000);
    });
  }

  async handleType() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: [
        {
          text: 'Nhà cung cấp',
          icon: 'cash-outline',
          cssClass: this.loaiDV == 'Nhà cung cấp' ? 'buttonSheetOn' : 'buttonSheetOff',
          handler: () => {
            this.loaiDV = 'Nhà cung cấp';
            this.sendItem.LoaiDV = "NCC";
          }
        },
        {
          text: 'Khách hàng',
          icon: 'card-outline',
          cssClass: this.loaiDV == 'Khách hàng' ? 'buttonSheetOn' : 'buttonSheetOff',
          handler: () => {
            this.loaiDV = 'Khách hàng'
            this.sendItem.LoaiDV = "KH";
          },
        }
      ]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }

  formatItem() {
    this.submit = false;

    this.sendItem = {
      "DonViID": 0,
      "LoaiDV": "NCC",
      "NhomDV": "",
      "MaGPP": "",
      "TenDV": "",
      "DiaChi": "",
      "DienThoai": ""
    };
  }

  closeModal() {
    this.GlobalService.closeModal();

  }
}
