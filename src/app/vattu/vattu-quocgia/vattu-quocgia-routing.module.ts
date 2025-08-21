import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VattuQuocgiaPage } from './vattu-quocgia.page';

const routes: Routes = [
  {
    path: '',
    component: VattuQuocgiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VattuQuocgiaPageRoutingModule {}
