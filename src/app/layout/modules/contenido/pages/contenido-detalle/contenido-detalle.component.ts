import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from '../../services/contenido.service';
import { IContentEntity } from '../../interfaces/IContentEntity';
import { AgregarBloqueModalComponent } from './agregar-bloque-modal/agregar-bloque-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contenido-detalle',
  templateUrl: './contenido-detalle.component.html',
  styleUrls: ['./contenido-detalle.component.css']
})
export class ContenidoDetalleComponent implements OnInit {

  contenidoData: IContentEntity;
  idContenido: string;
  keywords: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private contenidoService: ContenidoService,
    public dialog: MatDialog,

  ) { }

  ngOnInit(): void {
    this.idContenido = this.route.snapshot.paramMap.get('id')!; 
    this.getContenido();
  }

  getContenido(){
      this.contenidoService.getContentById(this.idContenido).subscribe((res: any)=> {
        console.log('get: ', res)
        this.contenidoData = res;
        this.keywords = JSON.parse(this.contenidoData.keywords);
        // this.orderArrayData = JSON.parse(this.seccionData.subsections_order)
      })
    
  }

  agregarBloqueModal(){
    const dialogRef = this.dialog.open(AgregarBloqueModalComponent, {
      width: '700px',
      height: 'auto',
      data: this.contenidoData.id,
      panelClass: 'custom-dialog'
    })

    dialogRef.componentInstance.block_emit.subscribe((res:any) => {
      console.log('res: ', res)
      this.getContenido();
    })
  }

}
