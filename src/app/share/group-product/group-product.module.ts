import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupProductPageRoutingModule } from './group-product-routing.module';

import { GroupProductPage } from './group-product.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupProductPageRoutingModule
  ],
  declarations: [GroupProductPage]
})
export class GroupProductPageModule {}
