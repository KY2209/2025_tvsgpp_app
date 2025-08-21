import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DvtCreatePageRoutingModule } from './dvt-create-routing.module';

import { DvtCreatePage } from './dvt-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DvtCreatePageRoutingModule
  ],
  declarations: [DvtCreatePage]
})
export class DvtCreatePageModule {}
