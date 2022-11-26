import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddGedungPage } from './add-gedung.page';

const routes: Routes = [
  {
    path: '',
    component: AddGedungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddGedungPageRoutingModule {}
