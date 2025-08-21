import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TonkhoIndexPageRoutingModule } from './tonkho-index-routing.module';

import { TonkhoIndexPage } from './tonkho-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TonkhoIndexPageRoutingModule
  ],
  declarations: [TonkhoIndexPage]
})
export class TonkhoIndexPageModule {}
