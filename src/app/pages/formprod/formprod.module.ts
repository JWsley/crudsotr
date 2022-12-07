import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormprodPageRoutingModule } from './formprod-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { FormprodPage } from './formprod.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormprodPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FormprodPage]
})
export class FormprodPageModule {}
