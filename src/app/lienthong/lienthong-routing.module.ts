import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LienthongPage } from './lienthong.page';

const routes: Routes = [
  {
    path: '',
    component: LienthongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LienthongPageRoutingModule {}
