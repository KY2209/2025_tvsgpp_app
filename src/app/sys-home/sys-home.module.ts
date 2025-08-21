import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SysHomePageRoutingModule } from './sys-home-routing.module';

import { SysHomePage } from './sys-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SysHomePageRoutingModule
  ],
  declarations: [SysHomePage]
})
export class SysHomePageModule {}
