import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuanganPageRoutingModule } from './ruangan-routing.module';

import { RuanganPage } from './ruangan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuanganPageRoutingModule
  ],
  declarations: [RuanganPage]
})
export class RuanganPageModule {}
