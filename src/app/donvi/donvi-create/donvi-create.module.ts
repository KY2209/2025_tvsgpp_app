import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonviCreatePageRoutingModule } from './donvi-create-routing.module';

import { DonviCreatePage } from './donvi-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonviCreatePageRoutingModule
  ],
  declarations: [DonviCreatePage]
})
export class DonviCreatePageModule {}
