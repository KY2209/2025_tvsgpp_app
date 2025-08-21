import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { GlobalService } from 'src/app/service/global.service';
import { LoadingService } from 'src/app/service/loading.service';
import { XuatkhoService } from 'src/app/service/xuatkho.service';

@Component({
  selector: 'app-dvt',
  templateUrl: './dvt.component.html',
  styleUrls: ['./dvt.component.scss'],
})
export class DVTComponent implements OnInit {
  DVT: string = '';
  MaVT: string = '';
  listDVT: any = [];
  InOutType: string = "N";

  constructor(
    private navParams: NavParams,
    private LoadingService: LoadingService,
    private XuatkhoService: XuatkhoService,
    public popoverController: PopoverController,
    private GlobalService: GlobalService,

  ) {
    this.DVT = this.navParams.data.DVT;
    this.MaVT = this.navParams.data.MaVT;
    this.getDVT();
  }

  ngOnInit() { }

  getDVT() {
    this.LoadingService.setValue(true);
    this.InOutType = localStorage.getItem("InOutType");

    this.XuatkhoService.DonViTinh(this.MaVT).subscribe((response: any) => {
      console.log("36", response);
      this.listDVT = response;
      // for (let i = 0; i < this.listDVT.length; i++) {
      //   if(this.listDVT[i].MaVT == this.MaVT){
      //     this.listDVT[i].check = true;
      //   }else{
      //     this.listDVT[i].check = false;
      //   }
      // }

      this.LoadingService.setValue(false);
    }, (error) => {
      console.log('error', error);
      this.LoadingService.setValue(false);

    });
  }

  handleDVT(item) {
    this.popoverController.dismiss(item);
    // this.GlobalService.closeModalSenData(item);
  }
}
