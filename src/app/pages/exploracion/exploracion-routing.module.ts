import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploracionPage } from './exploracion.page';

const routes: Routes = [
  {
    path: '',
    component: ExploracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploracionPageRoutingModule {}
