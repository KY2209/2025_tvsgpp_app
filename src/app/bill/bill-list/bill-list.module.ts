import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillListPageRoutingModule } from './bill-list-routing.module';

import { BillListPage } from './bill-list.page';
import { PrintBillComponent } from 'src/app/share/print-bill/print-bill.component';
import { NoDataComponent } from 'src/app/share/no-data/no-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillListPageRoutingModule
  ],
  declarations: [BillListPage, PrintBillComponent, NoDataComponent]
})
export class BillListPageModule {}
