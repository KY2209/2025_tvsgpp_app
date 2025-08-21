import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillWaitPageRoutingModule } from './bill-wait-routing.module';

import { BillWaitPage } from './bill-wait.page';
import { NoDataComponent } from 'src/app/share/no-data/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillWaitPageRoutingModule
  ],
  declarations: [BillWaitPage, NoDataComponent]
})
export class BillWaitPageModule {}
