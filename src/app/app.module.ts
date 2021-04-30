import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './layouts/home/home.component';
import {MatInputModule} from '@angular/material/input';
import { HeaderComponent } from './layouts/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LayoutsModule } from './layouts/layouts.module';



@NgModule({
  declarations: [ 
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    AppRoutingModule,
    
    // MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
