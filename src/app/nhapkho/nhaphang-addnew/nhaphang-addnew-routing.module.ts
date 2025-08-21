import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NhaphangAddnewPage } from './nhaphang-addnew.page';

const routes: Routes = [
  {
    path: '',
    component: NhaphangAddnewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NhaphangAddnewPageRoutingModule {}
