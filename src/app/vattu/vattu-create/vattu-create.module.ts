import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VattuCreatePageRoutingModule } from './vattu-create-routing.module';

import { VattuCreatePage } from './vattu-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VattuCreatePageRoutingModule
  ],
  declarations: [VattuCreatePage]
})
export class VattuCreatePageModule {}
