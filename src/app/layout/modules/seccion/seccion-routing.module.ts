import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SeccionComponent } from './seccion.component';
import { MisSeccionesComponent } from './pages/mis-secciones/mis-secciones.component';
import { SeccionDetalleComponent } from './pages/seccion-detalle/seccion-detalle.component';




const routes: Routes = [
  {
    path: '', 
    component: SeccionComponent,
    children: [
        { path: '', redirectTo: 'mis-secciones', pathMatch: 'full' },
        { path: 'mis-secciones'   , component: MisSeccionesComponent},
        { path: 'mis-secciones/detalle/:id', component: SeccionDetalleComponent},
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