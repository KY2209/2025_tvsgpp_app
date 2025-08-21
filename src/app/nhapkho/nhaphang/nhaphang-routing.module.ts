import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhaphangPage } from './nhaphang.page';

const routes: Routes = [
  {
    path: '',
    component: NhaphangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhaphangPageRoutingModule {}
