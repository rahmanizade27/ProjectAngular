import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../products/products.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProductsModule
  ],
  exports: [ 
    HeaderComponent,
  ],
  declarations: [HeaderComponent,HomeComponent]
})
export class LayoutsModule { }
