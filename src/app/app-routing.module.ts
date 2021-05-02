import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './layouts/home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product-list', component: ProductListComponent },
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
