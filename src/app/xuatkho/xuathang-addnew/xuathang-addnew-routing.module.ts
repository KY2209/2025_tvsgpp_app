import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { XuathangAddnewPage } from './xuathang-addnew.page';

const routes: Routes = [
  {
    path: '',
    component: XuathangAddnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XuathangAddnewPageRoutingModule {}
