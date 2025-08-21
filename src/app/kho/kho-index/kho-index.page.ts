import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/service/AlertService';
import { GlobalService } from 'src/app/service/global.service';
import { KhoService } from 'src/app/service/kho.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
import { KhoCreatePage } from '../kho-create/kho-create.page';

@Component({
  selector: 'app-kho-index',
  templateUrl: './kho-index.page.html',
  styleUrls: ['./kho-index.page.scss'],
})
export class KhoIndexPage implements OnInit {
  listData: any = [];
  listDataSearch: any = [];
  timeout: any = '';
  keyword: string = '';
  countKho: number = 0;

  constructor(
    private GlobalService: GlobalService,
    private navParams: NavParams,
    private LoadingService: LoadingService,
    private KhoService: KhoService,
    public actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private AlertService: AlertService,
    private ToastService: ToastService,
  ) {
    if(this.navParams.data.listKho){
      this.listData = this.navParams.data.listKho;
      this.listDataSearch = this.navParams.data.listKho;
    }else{
      this.getKho();
    }
  }

  ngOnInit() {
  }

  getKho() {
    this.LoadingService.setValue(true);

    this.KhoService.getKho().subscribe((response: any) => {
      this.listData = response;
      this.countKho = response.length;
      this.listDataSearch = response;
      this.LoadingService.setValue(false);

    }, (error) => {
      setTimeout(() => {
        console.log('error', error);
      }, 1000);
    });
  }

  onSearch(e: any) {
    var arrPlan = [];
    this.keyword = e.target.value;

    if (!this.keyword) {
      arrPlan = this.listDataSearch;
    } else {
      clearTimeout(this.timeout);
      var $this = this;

      this.timeout = setTimeout(function () {

        $this.listDataSearch.find((o: any, i: any) => {
          if (o.TenKho && o.TenKho.toLowerCase().includes($this.keyword.toLowerCase()) == true) {
            arrPlan.push($this.listDataSearch[i]);
          }
        });
        $this.countKho = arrPlan.length;
        $this.listData = arrPlan;

      }, 1000);
    }
  }

  getItem(item) {
    this.listData.find((o, i) => {
      if (o.KhoID == item.KhoID) {
        this.listData[i]['check'] = true;
      } else {
        this.listData[i]['check'] = false;
      }
    });
  }

  async handleItem(item){
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'left-align-buttons',
      buttons: [
        {
          text: 'Sửa kho',
          icon: 'create-outline',
          handler: () => {
            this.addItem('false', item);
          }
        },
        {
          text: 'Xóa kho',
          cssClass: 'buttonSheetDelete' ,

          icon: 'trash',
          handler: () => {
            this.deleteUnit(item.KhoID);
          },
        }
      ]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
  }


  async addItem(isCreate, KhoItem?){

    console.log('isCreate', isCreate);
    
    const modal = await this.modalController.create({
      component: KhoCreatePage,
      cssClass: 'halfModal2',
      componentProps: {
        "isCreate": isCreate,
        "KhoItem": KhoItem,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      console.log(dataReturned);

      // if (dataReturned.data) {
        this.getKho();
      // }
    });
    return await modal.present();
  }

  deleteUnit(id){
    this.AlertService.presentAlert(`Xác nhận xóa kho?`).then(res => {
      if (res == 'true') {
        this.LoadingService.setValue(true);
        this.KhoService.deleteKho(id).subscribe((response: any) => {
          var res = JSON.parse(response._body);
          // if (res.code == 200) {
            this.ToastService.successToast('Xóa kho thành công!');
            this.getKho();

          // } else {
          //   this.ToastService.errorToast(res.message);
          // }
          this.LoadingService.setValue(false);

        }, (error) => {
          setTimeout(() => {
            console.log('error', error);
          }, 1000);
        });
      }
    });
  }
  deleteSearch() {
    this.keyword = '';
    this.getKho();
  }

  chooseItem(item) {
    this.GlobalService.closeModalSenData(item);
  }

  closeModal() {
    this.GlobalService.closeModal();

  }
}
