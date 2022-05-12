import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './module/customer/customer.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { HelpComponent } from './module/help/help.component';
import { MessageComponent } from './module/message/message.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'customer',
    // 1º forma es la clasica pero carga todos los componentes que tiene la aplicacion
    component: CustomerComponent,

    // leaseload: carga bajo demanda las  secciones solo se va a
    // cargar los componentes que usas por eso se
    // llama carga peresoza
    //loadChildren: () => import('./module/dashboard/dashboard.component')
  },
  {
    path: 'message',
    component: MessageComponent,
  },
  {
    path:'help',
    component: HelpComponent,
  },
  {
    path:'**',
    redirectTo: 'dashboard',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
