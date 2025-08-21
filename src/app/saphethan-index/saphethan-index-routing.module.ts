import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaphethanIndexPage } from './saphethan-index.page';

const routes: Routes = [
  {
    path: '',
    component: SaphethanIndexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaphethanIndexPageRoutingModule {}
