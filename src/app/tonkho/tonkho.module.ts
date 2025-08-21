import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TonkhoPageRoutingModule } from './tonkho-routing.module';

import { TonkhoPage } from './tonkho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TonkhoPageRoutingModule
  ],
  declarations: [TonkhoPage]
})
export class TonkhoPageModule {}
