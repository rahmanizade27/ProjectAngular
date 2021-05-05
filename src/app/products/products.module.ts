import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatCardModule} from '@angular/material/card';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    SharedModule
    
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
