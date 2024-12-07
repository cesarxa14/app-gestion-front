import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoComponent } from './contenido.component';
import { MisContenidosComponent } from './pages/mis-contenidos/mis-contenidos.component';
import { ContenidoRoutingModule } from './contenido-routing.module';
import { AgregarContenidoModalComponent } from './pages/mis-contenidos/agregar-contenido-modal/agregar-contenido-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { TagInputModule } from 'ngx-chips';
import { ContenidoDetalleComponent } from './pages/contenido-detalle/contenido-detalle.component';
import { AgregarBloqueModalComponent } from './pages/contenido-detalle/agregar-bloque-modal/agregar-bloque-modal.component';



@NgModule({
  declarations: [
    ContenidoComponent,
    MisContenidosComponent,
    AgregarContenidoModalComponent,
    ContenidoDetalleComponent,
    AgregarBloqueModalComponent
  ],
  imports: [
    CommonModule,
    ContenidoRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    MatDialogModule,
    AngularEditorModule,
    TagInputModule
  ]
})
export class ContenidoModule { }
