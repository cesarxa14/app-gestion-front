import { Component, OnInit } from '@angular/core';
import { SeccionService } from '../../services/seccion.service';
import { MatDialog } from '@angular/material/dialog';
import { AgregarSeccionModalComponent } from './agregar-seccion-modal/agregar-seccion-modal.component';
import { ISectionEntity } from '../../interfaces/ISectionEntity';
import { EditSeccionModalComponent } from './edit-seccion-modal/edit-seccion-modal.component';
import Swal from 'sweetalert2';

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
    Swal.showLoading();
    this.seccionService.getSecciones().subscribe((res: any) => {
      console.log('res get secciones: ', res);
      Swal.close();
      this.sectionsList = res;
    })
  }

  abrirModal(){

    const dialogRef = this.dialog.open(AgregarSeccionModalComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'custom-dialog'
    })

    dialogRef.componentInstance.seccion_emit.subscribe((res:any) => {
      console.log('res: ', res)
      this.getSecciones();
    })

  }

  editSeccion(sec: ISectionEntity){
    const dialogRef = this.dialog.open(EditSeccionModalComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'custom-dialog',
      data: sec
    })

    dialogRef.componentInstance.edit_emit.subscribe((res:any) => {
      console.log('res: ', res)
      this.getSecciones();
    })
  }

  deleteSeccion(seccion: ISectionEntity){
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar la seccion?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.seccionService.deleteSection(seccion.id).subscribe((res) => {    
          console.log('eliminado: ', res)
          this.getSecciones();
        })
      } 
    })
  }

}
