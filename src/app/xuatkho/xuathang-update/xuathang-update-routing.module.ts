import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XuathangUpdatePage } from './xuathang-update.page';

const routes: Routes = [
  {
    path: '',
    component: XuathangUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XuathangUpdatePageRoutingModule {}
