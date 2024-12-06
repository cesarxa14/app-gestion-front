import { Component, OnInit } from '@angular/core';
import { ContenidoService } from '../../services/contenido.service';
import { IContentEntity } from '../../interfaces/IContentEntity';

@Component({
  selector: 'app-mis-contenidos',
  templateUrl: './mis-contenidos.component.html',
  styleUrls: ['./mis-contenidos.component.css']
})
export class MisContenidosComponent implements OnInit {

  contentList: IContentEntity[] = [];
  constructor(
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

  }

}
