import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XuathangPageRoutingModule } from './xuathang-routing.module';

import { XuathangPage } from './xuathang.page';
import { PrintBillComponent } from 'src/app/share/print-bill/print-bill.component';
import { NoDataComponent } from 'src/app/share/no-data/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XuathangPageRoutingModule
  ],
  declarations: [XuathangPage, PrintBillComponent, NoDataComponent]
})
export class XuathangPageModule {}
