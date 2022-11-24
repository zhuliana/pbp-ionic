import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuanganPage } from './ruangan.page';

const routes: Routes = [
  {
    path: '',
    component: RuanganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuanganPageRoutingModule {}
