import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HangSanXuatPageRoutingModule } from './hang-san-xuat-routing.module';

import { HangSanXuatPage } from './hang-san-xuat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HangSanXuatPageRoutingModule
  ],
  declarations: [HangSanXuatPage]
})
export class HangSanXuatPageModule {}
