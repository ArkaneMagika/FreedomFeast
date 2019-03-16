import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersModule } from './component/users.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UsersComponent } from './component/users.component';
/*import { RegularComponent } from './component/users/regular/regular.component';
import { OrdersComponent } from './component/users/orders/orders.component';
import { KitchenComponent } from './component/users/kitchen/kitchen.component'; */

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent, loadChildren: () => UsersModule },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true }), UsersModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
