import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatNativeDateModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLayoutModule } from './material-layout/material-layout.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { KitchenComponent } from './component/kitchen/kitchen.component';
import { LoginRegisterComponent } from './component/login-register/login-register.component';
import { HomeComponent } from './component/home/home.component';
import { OrdersComponent } from './component/orders/orders.component';

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
    MaterialLayoutModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
