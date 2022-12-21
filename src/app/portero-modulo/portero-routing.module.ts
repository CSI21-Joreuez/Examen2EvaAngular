import { Routes, RouterModule } from '@angular/router';
import { PorteroModuloComponent } from './portero-modulo.component';
import { DetallesPorteroComponent } from './detalles-portero/detalles-portero.component';
import { NgModule } from '@angular/core';

const routes: Routes =[
    {path: 'portero', component: PorteroModuloComponent},
    {path: 'portero:/id', component:  DetallesPorteroComponent},
    {path: '**', redirectTo: 'portero', pathMatch:'full'}
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PorteroRoutingModule { }