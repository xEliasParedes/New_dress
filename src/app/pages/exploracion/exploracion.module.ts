import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploracionPageRoutingModule } from './exploracion-routing.module';

import { ExploracionPage } from './exploracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploracionPageRoutingModule
  ],
  declarations: [ExploracionPage]
})
export class ExploracionPageModule {}
