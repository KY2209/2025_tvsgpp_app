import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtDangkyPageRoutingModule } from './ht-dangky-routing.module';

import { HtDangkyPage } from './ht-dangky.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HtDangkyPageRoutingModule
  ],
  declarations: [HtDangkyPage]
})
export class HtDangkyPageModule {}
