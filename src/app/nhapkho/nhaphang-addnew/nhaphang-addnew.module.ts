import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NhaphangAddnewPageRoutingModule } from './nhaphang-addnew-routing.module';

import { NhaphangAddnewPage } from './nhaphang-addnew.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NhaphangAddnewPageRoutingModule
  ],
  declarations: [NhaphangAddnewPage]
})
export class NhaphangAddnewPageModule {}
