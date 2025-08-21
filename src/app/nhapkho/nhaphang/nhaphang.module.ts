import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhaphangPageRoutingModule } from './nhaphang-routing.module';

import { NhaphangPage } from './nhaphang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhaphangPageRoutingModule
  ],
  declarations: [NhaphangPage]
})
export class NhaphangPageModule {}
