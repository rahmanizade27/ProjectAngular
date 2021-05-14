import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../layouts/components/home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes } from '@angular/router';


const routes: Routes = [
  {
      path: '', component: HomeComponent,
      children: [
          { path: 'login', component: SigninComponent },
          { path: 'signUp', component: SignupComponent }
      ]
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AuthRoutingModule { }
