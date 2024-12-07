import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './contenido.component';
import { MisContenidosComponent } from './pages/mis-contenidos/mis-contenidos.component';
import { ContenidoDetalleComponent } from './pages/contenido-detalle/contenido-detalle.component';





const routes: Routes = [
  {
    path: '', 
    component: ContenidoComponent,
    children: [
        { path: '', redirectTo: 'mis-contenidos', pathMatch: 'full' },
        { path: 'mis-contenidos'   , component: MisContenidosComponent},
        { path: 'mis-contenidos/detalle/:id', component: ContenidoDetalleComponent},
        // { path: 'mis-secciones/detalle/:id', component: SeccionDetalleComponent},
    ]

  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ContenidoRoutingModule { }