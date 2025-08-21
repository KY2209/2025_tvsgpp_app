import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VattuCreatePage } from './vattu-create.page';

const routes: Routes = [
  {
    path: '',
    component: VattuCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VattuCreatePageRoutingModule {}
