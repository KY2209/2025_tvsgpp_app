import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VattuListPageRoutingModule } from './vattu-list-routing.module';

import { VattuListPage } from './vattu-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VattuListPageRoutingModule
  ],
  declarations: [VattuListPage]
})
export class VattuListPageModule {}
