import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
@Component({
  selector: 'app-nuoc-san-xuat',
  templateUrl: './nuoc-san-xuat.page.html',
  styleUrls: ['./nuoc-san-xuat.page.scss'],
})
export class NuocSanXuatPage implements OnInit {
  listData: any = [];
  listDataSearch: any = [];
  keyword: string = '';
  constructor(
    private GlobalService: GlobalService,
    private LoadingService: LoadingService
  ) {
    this.getVattu();
  }

  ionViewDidEnter() { }

  ngOnInit() { }

  getVattu() {
    // this.LoadingService.setValue(true);
    this.listData = JSON.parse(localStorage.getItem('NuocSanXuat') || '[]');
    this.listDataSearch = JSON.parse(localStorage.getItem('NuocSanXuat') || '[]');
    // this.LoadingService.setValue(false);
  }


  onSearch(e: any) {
    var arrPlan = [];
    this.keyword = e.target.value;
    this.listDataSearch.find((o: any, i: any) => {
      console.log(o);

      if (o.toLowerCase().includes(this.keyword.toLowerCase()) == true) {
        arrPlan.push(this.listDataSearch[i]);
      }
    });
    this.listData = arrPlan;
  }

  handleItem(item) {
    this.GlobalService.closeModalSenData(item);
  }

  deleteSearch() {
    this.keyword = '';
    this.listData = this.listDataSearch;
  }

  closeModal() {
    this.GlobalService.closeModal();
  }
}
