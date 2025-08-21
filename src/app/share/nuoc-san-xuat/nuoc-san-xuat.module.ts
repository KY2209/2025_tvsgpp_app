import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuocSanXuatPageRoutingModule } from './nuoc-san-xuat-routing.module';

import { NuocSanXuatPage } from './nuoc-san-xuat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuocSanXuatPageRoutingModule
  ],
  declarations: [NuocSanXuatPage]
})
export class NuocSanXuatPageModule {}
