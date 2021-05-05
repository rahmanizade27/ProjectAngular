import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ 
    HeaderComponent,
  ],
  declarations: [HeaderComponent,HomeComponent]
})
export class LayoutsModule { }
