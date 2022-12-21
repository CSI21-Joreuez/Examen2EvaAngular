import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesPorteroComponent } from './detalles-portero/detalles-portero.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PorteroRoutingModule } from './portero-routing.module';
import { PorteroModuloComponent } from './portero-modulo.component';



@NgModule({
  declarations: [
    DetallesPorteroComponent,
    
  ],
  imports: [
    CommonModule,
    PorteroRoutingModule,
    ReactiveFormsModule
  ]
})
export class PorteroModuloModule { }
