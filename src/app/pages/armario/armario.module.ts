import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmarioPageRoutingModule } from './armario-routing.module';

import { ArmarioPage } from './armario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmarioPageRoutingModule
  ],
  declarations: [ArmarioPage]
})
export class ArmarioPageModule {}
