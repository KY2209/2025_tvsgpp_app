import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupProductPage } from './group-product.page';

const routes: Routes = [
  {
    path: '',
    component: GroupProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupProductPageRoutingModule {}
