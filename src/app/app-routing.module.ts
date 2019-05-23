import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CustomerComponent} from './customer/customer.component';
import {DashboardMaterialComponent} from './dashboard-material/dashboard-material.component';

const routes: Routes = [
  {path: '' , pathMatch: 'full' , redirectTo: 'dashboard'},
  {path: 'dashboard' , component: DashboardComponent},
  {path: 'customer' , component: CustomerComponent},
  {path: 'matdashboard' , component: DashboardMaterialComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
