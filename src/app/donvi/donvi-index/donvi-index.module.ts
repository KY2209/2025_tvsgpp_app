import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonviIndexPageRoutingModule } from './donvi-index-routing.module';

import { DonviIndexPage } from './donvi-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonviIndexPageRoutingModule
  ],
  declarations: [DonviIndexPage]
})
export class DonviIndexPageModule {}
