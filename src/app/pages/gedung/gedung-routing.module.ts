import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GedungPage } from './gedung.page';

const routes: Routes = [
  {
    path: '',
    component: GedungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GedungPageRoutingModule {}
