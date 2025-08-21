import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhaphangUpdatePage } from './nhaphang-update.page';

const routes: Routes = [
  {
    path: '',
    component: NhaphangUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhaphangUpdatePageRoutingModule {}
