import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavParams } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { UnitService } from 'src/app/service/unit.service';
import { DonviCreatePage } from '../donvi-create/donvi-create.page';
import { AlertService } from 'src/app/service/AlertService';
import { ToastService } from 'src/app/service/toastService';

@Component({
  selector: 'app-donvi-index',
  templateUrl: './donvi-index.page.html',
  styleUrls: ['./donvi-index.page.scss'],
})
export class DonviIndexPage implements OnInit {
  @Input() page: string = '';
  listData: any = [];
  listDataAll: any;
  listDataSearch: any = [];
  countDV: number = 0;
  timeout: any = '';
  keyword: string = '';
  listPhone: any = [];
  constructor(
    private GlobalService: GlobalService,
    private navParams: NavParams,
    private modalController: ModalController,
    public actionSheetController: ActionSheetController,
    private LoadingService: LoadingService,
    private AlertService: AlertService,
    private ToastService: ToastService,
    private UnitService: UnitService
  ) {
    if (this.navParams.data.listUnit) {
      this.listData = this.navParams.data.listUnit;
      this.listDataSearch = this.navParams.data.listUnit;
    } else {
      this.getUnit();
    }
  }

  ngOnInit() {
  }

  getUnit(closeModal?) {
    this.LoadingService.setValue(true);

    this.UnitService.getUnit().subscribe((response: any) => {
      var arr = [];
      for (let i = 0; i < response.length; i++) {
        if (response[i].DienThoai) {
          this.listPhone.push(response[i].DienThoai);
        }
        if (this.page == 'nhapmua' && response[i].LoaiDV == 'NCC') {
          arr.push(response[i]);
        } else if (this.page == 'xuatbanle' && response[i].LoaiDV == 'KH') {
          arr.push(response[i]);
        }
      }
      this.countDV = arr.length;

      this.listData = arr;
      this.listDataSearch = arr;
      this.listDataAll = this.listData;
      // console.log('arr', arr);
      this.LoadingService.setValue(false);
      if (closeModal) {
        this.GlobalService.closeModalSenData(this.listData[0]);
      }
    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
        this.LoadingService.setValue(false);

      }, 1000);
    });
  }

  onSearch(e: any) {
    var arrPlan = [];
    this.keyword = e.target.value;
    var $this = this;
    if (this.keyword == '') {
      this.listData = this.listDataAll;
      this.listDataSearch = this.listData;
      arrPlan = this.listDataSearch;
      $this.countDV = arrPlan.length;
    } else {



      $this.listDataSearch.find((o: any, i: any) => {
        if (o.TenDV != null) {
          if (o.TenDV.toLowerCase().includes($this.keyword.toLowerCase()) == true) {
            arrPlan.push($this.listDataSearch[i]);
          }
          else {
            $this.listData = this.listDataAll;
          }
        }


        if (o.DienThoai != null) {
          if (o.DienThoai.includes($this.keyword) == true) {
            arrPlan.push($this.listDataSearch[i]);
          }
          else {
            $this.listData = this.listDataAll;
          }
        }


      });
      $this.countDV = arrPlan.length;

      $this.listData = arrPlan;

    }
  }

  getItem(item) {
    this.listData.find((o, i) => {
      if (o.DonViID == item.DonViID) {
        this.listData[i]['check'] = true;
      } else {
        this.listData[i]['check'] = false;
      }
    });
  }

  deleteSearch() {
    this.keyword = '';
    this.getUnit();
  }

  async addItem(isCreate, DonViItem?) {
    console.log('this.listPhone', this.listPhone);

    const modal = await this.modalController.create({
      component: DonviCreatePage,
      cssClass: 'halfModal',
      componentProps: {
        "isCreate": isCreate,
        "DonViItem": DonViItem,
        "page": this.page,
        "listPhone": this.listPhone
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned.data) {
        this.getUnit('closeModal');
      }
    });
    return await modal.present();
  }

  deleteUnit(id) {
    this.AlertService.presentAlert(`Xác nhận xóa đơn vị?`).then(res => {
      if (res == 'true') {
        this.LoadingService.setValue(true);
        this.UnitService.deleteUnit(id).subscribe((response: any) => {
          var res = JSON.parse(response._body);
          // if (res.code == 200) {
          this.ToastService.successToast('Xóa đơn vị thành công!');
          this.getUnit();

          // } else {
          //   this.ToastService.errorToast(res.message);
          // }
          this.LoadingService.setValue(false);

        }, (error) => {
          setTimeout(() => {
            this.LoadingService.setValue(false);
            console.log('error', error);
          }, 1000);
        });
      }
    });
  }

  async handleItem(item) {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: [
        {
          text: 'Sửa đơn vị',
          icon: 'create-outline',
          handler: () => {
            this.addItem('false', item);
          }
        },
        {
          text: 'Xóa đơn vị',
          cssClass: 'buttonSheetDelete',

          icon: 'trash',
          handler: () => {
            this.deleteUnit(item.DonViID);
          },
        }
      ]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }


  chooseItem(item) {
    this.GlobalService.closeModalSenData(item);
  }

  closeModal() {
    this.GlobalService.closeModal();

  }
}
