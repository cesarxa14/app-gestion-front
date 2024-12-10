import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContenidoService } from '../../services/contenido.service';
import { IContentEntity } from '../../interfaces/IContentEntity';
import { AgregarBloqueModalComponent } from './agregar-bloque-modal/agregar-bloque-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { BloqueService } from '../../services/bloque.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contenido-detalle',
  templateUrl: './contenido-detalle.component.html',
  styleUrls: ['./contenido-detalle.component.css']
})
export class ContenidoDetalleComponent implements OnInit {

  contenidoData: IContentEntity = {title: '', description: '', article: '', document: '', image: '', introduction: '',
    keywords: '', link: '', seccion_id: 0, type: '', createdAt: '', id: 0, updateAt: '' 
  };
  idContenido: string;
  keywords: any[] = [];
  blocksList: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private contenidoService: ContenidoService,
    public dialog: MatDialog,
    private bloqueService: BloqueService,


  ) { }

  async ngOnInit() {
    this.idContenido = this.route.snapshot.paramMap.get('id')!; 
    await this.getContenido();
  }

  async getContenido(){
    Swal.showLoading();
    return new Promise<void>((resolve, reject)=> {
      this.contenidoService.getContentById(this.idContenido).subscribe(async (res: any)=> {
        console.log('get: ', res)
        this.contenidoData = res;
        this.keywords = JSON.parse(this.contenidoData.keywords);
        await this.getBloquesByContenido();
        Swal.close();
        resolve();
        // this.orderArrayData = JSON.parse(this.seccionData.subsections_order)
      })
    })
      
    
  }

  async getBloquesByContenido(){
    return new Promise<void>((resolve, reject)=> {
      this.bloqueService.getBlocksByContent(Number(this.idContenido)).subscribe((res:any) => {
        console.log('contenido: ', res)
        this.blocksList = res;
        resolve();
      })
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
      this.getBloquesByContenido();
    })
  }

}
