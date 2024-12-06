import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido.component';
import { MisContenidosComponent } from './pages/mis-contenidos/mis-contenidos.component';
import { ContenidoRoutingModule } from './contenido-routing.module';



@NgModule({
  declarations: [
    ContenidoComponent,
    MisContenidosComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule
  ]
})
export class ContenidoModule { }
