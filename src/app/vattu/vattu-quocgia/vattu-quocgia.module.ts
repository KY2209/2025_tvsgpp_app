import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VattuQuocgiaPageRoutingModule } from './vattu-quocgia-routing.module';

import { VattuQuocgiaPage } from './vattu-quocgia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VattuQuocgiaPageRoutingModule
  ],
  declarations: [VattuQuocgiaPage]
})
export class VattuQuocgiaPageModule {}
