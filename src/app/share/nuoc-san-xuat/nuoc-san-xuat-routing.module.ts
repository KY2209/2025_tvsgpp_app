import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuocSanXuatPage } from './nuoc-san-xuat.page';

const routes: Routes = [
  {
    path: '',
    component: NuocSanXuatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuocSanXuatPageRoutingModule {}
