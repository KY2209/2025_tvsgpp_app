import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhaphangDetailPageRoutingModule } from './nhaphang-detail-routing.module';

import { NhaphangDetailPage } from './nhaphang-detail.page';
import { DVTComponent } from 'src/app/donvitinh/dvt/dvt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhaphangDetailPageRoutingModule
  ],
  declarations: [NhaphangDetailPage, DVTComponent]
})
export class NhaphangDetailPageModule {}
