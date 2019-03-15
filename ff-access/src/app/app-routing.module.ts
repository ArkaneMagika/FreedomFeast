import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersComponent } from "./component/orders/orders.component";
import { HomeComponent } from './component/home/home.component';
import { LoginRegisterComponent } from './component/login-register/login-register.component';
import { KitchenComponent } from './component/kitchen/kitchen.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginRegisterComponent},
  {path:'users/kitchen', component:KitchenComponent},
  {path:'user/kitchen/orders', component:OrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
