import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule, 
    MatButtonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
