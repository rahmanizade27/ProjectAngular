import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product-list', component: ProductListComponent },
  {path: 'cart', component: ProductListComponent},
  {path: 'login', component: ProductListComponent}
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
