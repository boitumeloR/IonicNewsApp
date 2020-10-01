import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsNewsPageRoutingModule } from './us-news-routing.module';

import { UsNewsPage } from './us-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsNewsPageRoutingModule
  ],
  declarations: [UsNewsPage]
})
export class UsNewsPageModule {}
