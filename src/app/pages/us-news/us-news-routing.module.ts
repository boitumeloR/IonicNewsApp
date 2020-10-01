import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsNewsPage } from './us-news.page';

const routes: Routes = [
  {
    path: '',
    component: UsNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsNewsPageRoutingModule {}
