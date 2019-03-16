import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { RegularComponent } from './users/regular/regular.component';
import { OrdersComponent } from './users/orders/orders.component';
import { KitchenComponent } from './users/kitchen/kitchen.component';

const UserRoutes: Routes = [
  {
    path: 'users', canActivate: [], component: UsersComponent, children: [
      { path: 'regular', component: RegularComponent, canActivateChild: [true] },
      { path: 'regular/orders', component: OrdersComponent, canActivateChild: [true] },
      { path: 'kitchen', component: KitchenComponent, canActivateChild: [true] },
      { path: 'kitchen/orders', component: OrdersComponent, canActivateChild: [true] }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(UserRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
