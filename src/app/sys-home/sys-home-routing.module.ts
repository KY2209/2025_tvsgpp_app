import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SysHomePage } from './sys-home.page';

const routes: Routes = [
  {
    path: '',
    component: SysHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SysHomePageRoutingModule {}
