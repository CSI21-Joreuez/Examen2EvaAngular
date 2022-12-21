import { Component, OnInit, Input } from '@angular/core';
import { Portero } from '../interface/portero';
import { SerivcesService } from '../servicios/serivces.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-portero',
  templateUrl: './detalles-portero.component.html',
  styleUrls: ['./detalles-portero.component.css']
})
export class DetallesPorteroComponent implements OnInit {
  @Input() portero?: Portero;
  constructor
  (
    private porteroService: SerivcesService,
    private ruta: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

  getPortero(id:string){

    
  }

}
