import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XuathangDetailPageRoutingModule } from './xuathang-detail-routing.module';

import { PrintBillComponent } from 'src/app/share/print-bill/print-bill.component';
import { DVTComponent } from 'src/app/donvitinh/dvt/dvt.component';
import { XuathangDetailPage } from './xuathang-detail.page';
// import { PrintBillComponent } from 'src/app/share/print-bill/print-bill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XuathangDetailPageRoutingModule
  ],
  declarations: [XuathangDetailPage, PrintBillComponent, DVTComponent]
})
export class XuathangDetailPageModule {}
