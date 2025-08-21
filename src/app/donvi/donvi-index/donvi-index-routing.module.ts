import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonviIndexPage } from './donvi-index.page';

const routes: Routes = [
  {
    path: '',
    component: DonviIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonviIndexPageRoutingModule {}
