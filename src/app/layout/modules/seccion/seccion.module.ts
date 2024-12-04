import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeccionComponent } from './seccion.component';
import { SeccionRoutingModule } from './seccion-routing.module';
import { MisSeccionesComponent } from './pages/mis-secciones/mis-secciones.component';
import { AgregarSeccionModalComponent } from './pages/mis-secciones/agregar-seccion-modal/agregar-seccion-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SeccionComponent,
    MisSeccionesComponent,
    AgregarSeccionModalComponent
  ],
  imports: [
    CommonModule,
    SeccionRoutingModule,
    MatDialogModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class SeccionModule { }
