import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormprodPage } from './formprod.page';

const routes: Routes = [
  {
    path: '',
    component: FormprodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormprodPageRoutingModule {}
