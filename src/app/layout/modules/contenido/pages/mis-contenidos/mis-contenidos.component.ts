import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { IContentEntity } from '../../interfaces/IContentEntity';
import { MatDialog } from '@angular/material/dialog';
import { AgregarContenidoModalComponent } from './agregar-contenido-modal/agregar-contenido-modal.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-contenidos',
  templateUrl: './mis-contenidos.component.html',
  styleUrls: ['./mis-contenidos.component.css']
})
export class MisContenidosComponent implements OnInit {

  contentList: IContentEntity[] = [];
  constructor(
    public dialog: MatDialog,
    private contenidoService: ContenidoService
  ) { }

  ngOnInit(): void {
    this.getMyContents();

  }

  getMyContents(){
    Swal.showLoading();
    this.contenidoService.getContents().subscribe((res: any) => {
      console.log('res: ', res)
      Swal.close();
      this.contentList = res;
    })
  }

  abrirModal(){
    const dialogRef = this.dialog.open(AgregarContenidoModalComponent, {
      width: '600px',
      height: 'auto',
      panelClass: 'custom-dialog'
    })

    dialogRef.componentInstance.content_emit.subscribe((res:any) => {
      console.log('res: ', res)
      this.getMyContents();
    })
  }

  deleteContent(content: IContentEntity){
    Swal.fire({
      title: '¿Estás seguro que deseas eliminar el contenido?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contenidoService.deleteContent(content.id).subscribe((res) => {    
          console.log('eliminado: ', res)
          this.getMyContents();
        })
      } 
    })
  }

}
