import { Component, OnInit } from '@angular/core';
import { SeccionService } from '../../services/seccion.service';
import { ActivatedRoute } from '@angular/router';
import { ISectionEntity } from '../../interfaces/ISectionEntity';
import { MatDialog } from '@angular/material/dialog';
import { AgregarSubseccionModalComponent } from './agregar-subseccion-modal/agregar-subseccion-modal.component';
import { SubseccionService } from '../../services/subseccion.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { IUpdateOrderSubsections } from '../../interfaces/IUpdateOrderSubsectionsDto';

@Component({
  selector: 'app-seccion-detalle',
  templateUrl: './seccion-detalle.component.html',
  styleUrls: ['./seccion-detalle.component.css']
})
export class SeccionDetalleComponent implements OnInit {

  idSeccion: string;
  seccionData: ISectionEntity;
  subSeccionesList: ISectionEntity[] = [];
  orderArrayData: number[] = [];
  orderArrayCurrent: number[] = [];
  constructor(
    private seccionService: SeccionService,
    private subseccionService: SubseccionService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  async ngOnInit() {
    this.idSeccion = this.route.snapshot.paramMap.get('id')!; 
    console.log('idSeccion: ', this.idSeccion)
    await this.getSeccion();
    await this.getSubseccionesByIdSeccion();
  }

  async getSeccion(){
    return new Promise<void>((resolve, reject) => {
      this.seccionService.getSeccionById(this.idSeccion).subscribe((res: any)=> {
        console.log('get: ', res)
        this.seccionData = res;
        this.orderArrayData = JSON.parse(this.seccionData.subsections_order)
        resolve();
      })
    })
    
  }

  getSubseccionesByIdSeccion(){
    return new Promise<void>((resolve, reject) => {
      this.subseccionService.getSubseccionesByIdSeccion(this.idSeccion).subscribe((res: any) => {
        console.log('res subs: ', res)
        this.subSeccionesList = res;
        this.subSeccionesList = this.getOrderArray(this.subSeccionesList, this.orderArrayData)
        resolve();
      })
    })
    
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.subSeccionesList, event.previousIndex, event.currentIndex);
    console.log('list ordered: ', this.subSeccionesList)
    this.orderArrayCurrent = this.subSeccionesList.map(s => s.id)
    console.log('ids', this.orderArrayCurrent)
    const payloadUpdate: IUpdateOrderSubsections = {
      subsections_order: JSON.stringify(this.orderArrayCurrent)
    }
    this.seccionService.updateOrderSubsections(Number(this.idSeccion), payloadUpdate).subscribe(res => {
      console.log('actualizados: ', res);
    })


  }

  abrirModal(){
    const dialogRef = this.dialog.open(AgregarSubseccionModalComponent, {
      width: '600px',
      height: 'auto',
      data: this.idSeccion,
      panelClass: 'custom-dialog'
    })

    dialogRef.componentInstance.subseccion_emit.subscribe((res:any) => {
      console.log('res: ', res)
      // this.packages.unshift(pack_add)s
      this.subSeccionesList.push(res);
      
      this.orderArrayCurrent = this.subSeccionesList.map(sub => sub.id)
      const payloadUpdate: IUpdateOrderSubsections = {
        subsections_order: JSON.stringify(this.orderArrayCurrent)
      }
      this.seccionService.updateOrderSubsections(Number(this.idSeccion), payloadUpdate).subscribe(res => {
        console.log('actualizados: ', res);
      })

    })
  }

  getOrderArray(arraySubsections: any, arrayOrder: any){
    // const order = [3, 1, 2]; // El array con el orden deseado
    // const data = [
    //   { id: 1, name: 'cesar' },
    //   { id: 2, name: 'cesar2' },
    //   { id: 3, name: 'cesar3' }
    // ];

    // Ordenamos el segundo array en base al primer array
    const sortedData = arraySubsections.sort((a:any, b:any) => {
      return arrayOrder.indexOf(a.id) - arrayOrder.indexOf(b.id);
    });

    return sortedData;
  }
}
