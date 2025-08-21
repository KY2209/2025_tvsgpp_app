import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VattuIndexPageRoutingModule } from './vattu-index-routing.module';

import { VattuIndexPage } from './vattu-index.page';
import { DVTComponent } from 'src/app/donvitinh/dvt/dvt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VattuIndexPageRoutingModule
  ],
  declarations: [VattuIndexPage, DVTComponent]
})
export class VattuIndexPageModule {}
