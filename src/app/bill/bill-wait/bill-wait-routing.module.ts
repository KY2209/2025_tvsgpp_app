import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillWaitPage } from './bill-wait.page';

const routes: Routes = [
  {
    path: '',
    component: BillWaitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillWaitPageRoutingModule {}
