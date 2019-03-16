import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatNativeDateModule } from '@angular/material';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialLayoutModule } from '../material-layout/material-layout.module';

import { LocalStorageService } from '../services/local-storage.service';
import { FeastFreedomApiService } from '../services/feast-freedom-api.service';

import { HomeComponent } from './home/home.component';
import { RegularComponent } from './users/regular/regular.component';
import { KitchenComponent } from './users/kitchen/kitchen.component';
import { OrdersComponent } from './users/orders/orders.component';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [
    HomeComponent,
    KitchenComponent,
    OrdersComponent,
    RegularComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    // BrowserAnimationsModule,
    MaterialLayoutModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    // BrowserAnimationsModule,
    MaterialLayoutModule
  ],
  providers: [
    LocalStorageService,
    FeastFreedomApiService
  ]
})
export class UsersModule { }
