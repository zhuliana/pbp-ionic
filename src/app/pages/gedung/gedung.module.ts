import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GedungPageRoutingModule } from './gedung-routing.module';

import { GedungPage } from './gedung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GedungPageRoutingModule
  ],
  declarations: [GedungPage]
})
export class GedungPageModule {}
