import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XuathangDetailPage } from './xuathang-detail.page';


const routes: Routes = [
  {
    path: '',
    component: XuathangDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XuathangDetailPageRoutingModule {}
