import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { IContentEntity } from '../../interfaces/IContentEntity';
import { MatDialog } from '@angular/material/dialog';
import { AgregarContenidoModalComponent } from './agregar-contenido-modal/agregar-contenido-modal.component';

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
    this.contenidoService.getContents().subscribe((res: any) => {
      console.log('res: ', res)
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

}
