import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhoCreatePage } from './kho-create.page';

const routes: Routes = [
  {
    path: '',
    component: KhoCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhoCreatePageRoutingModule {}
