import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhoCreatePageRoutingModule } from './kho-create-routing.module';

import { KhoCreatePage } from './kho-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhoCreatePageRoutingModule
  ],
  declarations: [KhoCreatePage]
})
export class KhoCreatePageModule {}
