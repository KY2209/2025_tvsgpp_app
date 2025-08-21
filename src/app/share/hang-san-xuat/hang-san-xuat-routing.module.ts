import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HangSanXuatPage } from './hang-san-xuat.page';

const routes: Routes = [
  {
    path: '',
    component: HangSanXuatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HangSanXuatPageRoutingModule {}
