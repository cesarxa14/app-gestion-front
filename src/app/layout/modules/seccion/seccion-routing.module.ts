import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SeccionComponent } from './seccion.component';
import { MisSeccionesComponent } from './pages/mis-secciones/mis-secciones.component';




const routes: Routes = [
  {
    path: '', 
    component: SeccionComponent,
    children: [
        { path: '', redirectTo: 'mis-secciones', pathMatch: 'full' },
        { path: 'mis-secciones'   , component: MisSeccionesComponent},
        // { path: 'my-customers/details/:id', component: DetailCustomerComponent},
    ]

  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SeccionRoutingModule { }