import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhaphangDetailPage } from './nhaphang-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NhaphangDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhaphangDetailPageRoutingModule {}
