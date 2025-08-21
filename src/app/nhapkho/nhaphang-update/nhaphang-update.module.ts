import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhaphangUpdatePageRoutingModule } from './nhaphang-update-routing.module';

import { NhaphangUpdatePage } from './nhaphang-update.page';
import { XuathangItemComponent } from '../../xuatkho/xuathang-item/xuathang-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhaphangUpdatePageRoutingModule
  ],
  declarations: [NhaphangUpdatePage, XuathangItemComponent]
})
export class NhaphangUpdatePageModule {}
