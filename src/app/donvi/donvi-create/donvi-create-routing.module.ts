import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonviCreatePage } from './donvi-create.page';

const routes: Routes = [
  {
    path: '',
    component: DonviCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonviCreatePageRoutingModule {}
