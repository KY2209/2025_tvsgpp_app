import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhoIndexPage } from './kho-index.page';

const routes: Routes = [
  {
    path: '',
    component: KhoIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhoIndexPageRoutingModule {}
