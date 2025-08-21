import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LienthongPageRoutingModule } from './lienthong-routing.module';

import { LienthongPage } from './lienthong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LienthongPageRoutingModule
  ],
  declarations: [LienthongPage]
})
export class LienthongPageModule {}
