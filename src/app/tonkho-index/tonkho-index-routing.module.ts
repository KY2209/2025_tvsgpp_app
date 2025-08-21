import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TonkhoIndexPage } from './tonkho-index.page';

const routes: Routes = [
  {
    path: '',
    component: TonkhoIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TonkhoIndexPageRoutingModule {}
