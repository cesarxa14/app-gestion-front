import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionComponent } from './seccion.component';
import { SeccionRoutingModule } from './seccion-routing.module';
import { MisSeccionesComponent } from './pages/mis-secciones/mis-secciones.component';
import { AgregarSeccionModalComponent } from './pages/mis-secciones/agregar-seccion-modal/agregar-seccion-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeccionDetalleComponent } from './pages/seccion-detalle/seccion-detalle.component';
import { AgregarSubseccionModalComponent } from './pages/seccion-detalle/agregar-subseccion-modal/agregar-subseccion-modal.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { EditSeccionModalComponent } from './pages/mis-secciones/edit-seccion-modal/edit-seccion-modal.component';


@NgModule({
  declarations: [
    SeccionComponent,
    MisSeccionesComponent,
    AgregarSeccionModalComponent,
    SeccionDetalleComponent,
    AgregarSubseccionModalComponent,
    EditSeccionModalComponent
  ],
  imports: [
    CommonModule,
    SeccionRoutingModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
    DragDropModule,
    AngularEditorModule
  ]
})
export class SeccionModule { }
