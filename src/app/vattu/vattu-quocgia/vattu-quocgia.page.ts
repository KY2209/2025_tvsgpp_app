import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, NavController, NavParams } from '@ionic/angular';
import { AlertService } from 'src/app/service/AlertService';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { ToastService } from 'src/app/service/toastService';
import { VattuService } from 'src/app/service/vattu.service';
import { VattuCreatePage } from '../vattu-create/vattu-create.page';

@Component({
  selector: 'app-vattu-quocgia',
  templateUrl: './vattu-quocgia.page.html',
  styleUrls: ['./vattu-quocgia.page.scss'],
})
export class VattuQuocgiaPage implements OnInit {
  listData: any = [];
  listDataSearch: any = [];
  listVattu: any = [];
  page: string = '';
  listExist: any = [];
  timeout: any = '';
  sumThanhTien: number = 0;
  countVattu: number = 0;
  keyword: string = '';
  sendVattu = {
    "loainx": "''",
    "khohang": "",
    "banggia": ""
  }
  pageInfo = {
    'page': 1,
    'pageSize': 20,
    'keyword': "",
  }
  makho: string = '';
  countIndex: number = -1;
  listVattuExist: any = [];
  constructor(
    private navController: NavController,
    public actionSheetController: ActionSheetController,
    private LoadingService: LoadingService,
    private AlertService: AlertService,
    private modalController: ModalController,
    private ToastService: ToastService,
    private VattuService: VattuService,
    private GlobalService: GlobalService,
  ) {
    this.getVattuExist();
  }

  ionViewDidEnter() { }

  ngOnInit() { }

  getVattuExist() {

    this.VattuService.getVatTu().subscribe((response: any) => {
      this.listVattuExist = response;

    }, (error) => {
      console.log('error', error);
    });
  }


  getVatTuQuocGia() {
    this.LoadingService.setValue(true);
    this.VattuService.getVatTuQuocGia(this.keyword).subscribe((response: any) => {
      this.listVattu = response;
      // this.countVattu = response.length;
      console.log(this.listVattu);

      // this.listDataSearch = response;
      this.LoadingService.setValue(false);
    }, (error) => {
      this.LoadingService.setValue(false);
      console.log('error', error);
    });
  }

  onSearch(e: any) {
    this.keyword = e.target.value;
    if (!this.keyword) {
      this.deleteSearch();
    } else {
      clearTimeout(this.timeout);
      var $this = this;

      this.timeout = setTimeout(function () {
        $this.getVatTuQuocGia();
      }, 1000);
    }
  }

  getItem(item) {
    var checkExist = false;
    for (let i = 0; i < this.listVattuExist.length; i++) {
      if (this.listVattuExist[i].SoDangKy && this.listVattuExist[i].SoDangKy == item.SoDangKy) {
        checkExist = true;
        break;
      }
    }

    if (checkExist) {
      this.ToastService.errorToast("Sản phẩm đã tồn tại!")
      return;
    }
    this.GlobalService.closeModalSenData(item);
    // this.listData.find((o, i) => {
    //   if (o.VatTuID == item.VatTuID) {
    //     this.listData[i]['checkHover'] = true;
    //   } else {
    //     this.listData[i]['checkHover'] = false;
    //   }
    // });
  }

  deleteSearch() {
    this.keyword = '';
    this.listVattu = [];

    // this.getSandVT();
  }


  closeModal() {
    this.GlobalService.closeModal();
  }
}
