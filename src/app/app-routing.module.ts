import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/components/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  // {path: 'product-list', component: ProductListComponent },
  {path: 'cart', component: ProductListComponent},
  {path: 'login', component: SigninComponent},
  {path: 'signUp', component: SignupComponent}

];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
