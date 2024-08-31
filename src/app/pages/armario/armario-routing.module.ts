import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmarioPage } from './armario.page';

const routes: Routes = [
  {
    path: '',
    component: ArmarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmarioPageRoutingModule {}
