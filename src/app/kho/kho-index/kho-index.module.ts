import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KhoIndexPageRoutingModule } from './kho-index-routing.module';

import { KhoIndexPage } from './kho-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KhoIndexPageRoutingModule
  ],
  declarations: [KhoIndexPage]
})
export class KhoIndexPageModule {}
