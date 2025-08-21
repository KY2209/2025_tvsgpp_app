import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HtMadonviPage } from './ht-madonvi.page';

const routes: Routes = [
  {
    path: '',
    component: HtMadonviPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtMadonviPageRoutingModule {}
