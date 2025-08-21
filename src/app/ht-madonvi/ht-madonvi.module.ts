import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HtMadonviPageRoutingModule } from './ht-madonvi-routing.module';

import { HtMadonviPage } from './ht-madonvi.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicStorageModule.forRoot(),
    HtMadonviPageRoutingModule
  ],
  declarations: [HtMadonviPage]
})
export class HtMadonviPageModule {}
