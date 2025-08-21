import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VattuListPage } from './vattu-list.page';

const routes: Routes = [
  {
    path: '',
    component: VattuListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VattuListPageRoutingModule {}
