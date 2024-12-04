import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";



const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'secciones', loadChildren: () => import('./modules/seccion/seccion.module').then(m => m.SeccionModule) },
        { path: 'contenidos', loadChildren: () => import('./modules/contenido/contenido.module').then(m => m.ContenidoModule) },
      ]
    }
    
]
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class LayoutRoutingModule { }