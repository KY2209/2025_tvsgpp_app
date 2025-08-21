import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XuathangPage } from './xuathang.page';

const routes: Routes = [
  {
    path: '',
    component: XuathangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XuathangPageRoutingModule {}
