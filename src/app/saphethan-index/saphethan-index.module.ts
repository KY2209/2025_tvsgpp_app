import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaphethanIndexPageRoutingModule } from './saphethan-index-routing.module';

import { SaphethanIndexPage } from './saphethan-index.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaphethanIndexPageRoutingModule
  ],
  declarations: [SaphethanIndexPage]
})
export class SaphethanIndexPageModule {}
