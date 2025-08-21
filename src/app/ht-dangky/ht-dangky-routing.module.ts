import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtDangkyPage } from './ht-dangky.page';

const routes: Routes = [
  {
    path: '',
    component: HtDangkyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtDangkyPageRoutingModule {}
