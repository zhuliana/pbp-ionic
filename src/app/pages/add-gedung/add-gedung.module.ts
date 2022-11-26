import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddGedungPageRoutingModule } from './add-gedung-routing.module';

import { AddGedungPage } from './add-gedung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddGedungPageRoutingModule
  ],
  declarations: [AddGedungPage]
})
export class AddGedungPageModule {}
