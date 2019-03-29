import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
   {path: 'about', component: AboutComponent },
   {path: 'customers', component: CustomersComponent },
   {path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
