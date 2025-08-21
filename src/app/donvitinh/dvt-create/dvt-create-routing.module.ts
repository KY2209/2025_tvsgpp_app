import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DvtCreatePage } from './dvt-create.page';

const routes: Routes = [
  {
    path: '',
    component: DvtCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DvtCreatePageRoutingModule {}
