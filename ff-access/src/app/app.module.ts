import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLayoutModule } from './material-layout/material-layout.module';

import { UsersComponent } from './component/users/users.component';
import { KitchenComponent } from './component/kitchen/kitchen.component';
import { LoginRegisterComponent } from './component/login-register/login-register.component';
import { HomeComponent } from './component/home/home.component';
import { OrdersComponent } from './component/orders/orders.component';

import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    UsersComponent,
    KitchenComponent,
    LoginRegisterComponent,
    HomeComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
