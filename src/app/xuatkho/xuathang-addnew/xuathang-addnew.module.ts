import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { XuathangAddnewPageRoutingModule } from './xuathang-addnew-routing.module';

import { XuathangAddnewPage } from './xuathang-addnew.page';
import { XuathangItemComponent } from '../xuathang-item/xuathang-item.component';
import { PrintBillComponent } from 'src/app/share/print-bill/print-bill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    XuathangAddnewPageRoutingModule
  ],
  declarations: [XuathangAddnewPage, XuathangItemComponent, PrintBillComponent]
})
export class XuathangAddnewPageModule {}
