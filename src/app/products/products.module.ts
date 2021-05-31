import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatCardModule} from '@angular/material/card';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
    
  ],
  exports:[ProductListComponent]
})
export class ProductsModule { }
