import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AuthModule } from './auth/auth.module';
import {MatCardModule} from '@angular/material/card';
import { ProductsModule } from './products/products.module';



@NgModule({
  declarations: [ 
    AppComponent,
  ],
  imports: [
    LayoutsModule,
    ProductsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    AppRoutingModule,
    AuthModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
