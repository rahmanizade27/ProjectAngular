import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutsModule } from '../layouts/layouts.module';


@NgModule({
  imports: [
    CommonModule,
    IvyCarouselModule,
    MatCardModule,
    MatFormFieldModule,
    LayoutsModule,
    MatCardModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    LayoutsModule
  ],
  declarations: []
})
export class MaterialModule { }