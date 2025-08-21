import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TonkhoPage } from './tonkho.page';

const routes: Routes = [
  {
    path: '',
    component: TonkhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TonkhoPageRoutingModule {}
