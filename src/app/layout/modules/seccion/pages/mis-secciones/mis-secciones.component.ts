import { Component, OnInit } from '@angular/core';
import { SeccionService } from '../../services/seccion.service';
import { MatDialog } from '@angular/material/dialog';
import { AgregarSeccionModalComponent } from './agregar-seccion-modal/agregar-seccion-modal.component';
import { ISectionEntity } from '../../interfaces/ISectionEntity';

@Component({
  selector: 'app-mis-secciones',
  templateUrl: './mis-secciones.component.html',
  styleUrls: ['./mis-secciones.component.css']
})
export class MisSeccionesComponent implements OnInit {

  sectionsList: ISectionEntity[] = [];
  constructor(
    public dialog: MatDialog,
    private seccionService: SeccionService
  ) { }

  ngOnInit(): void {
    this.getSecciones();
  }

  getSecciones(){
    this.seccionService.getSecciones().subscribe((res: any) => {
      console.log('res get secciones: ', res);
      this.sectionsList = res;
    })
  }

  abrirModal(){

    const dialogRef = this.dialog.open(AgregarSeccionModalComponent, {
      width: '500px',
      height: 'auto',
    })

    dialogRef.componentInstance.event_emit.subscribe((res:any) => {
      this.getSecciones();
    })

  }

}
