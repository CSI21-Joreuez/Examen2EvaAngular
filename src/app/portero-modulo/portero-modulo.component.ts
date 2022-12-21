import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerivcesService } from './servicios/serivces.service';

@Component({
  selector: 'app-portero-modulo',
  templateUrl: './portero-modulo.component.html',
  styleUrls: ['./portero-modulo.component.css']
})
export class PorteroModuloComponent implements OnInit {

  porteros : any[]=[];
  constructor(
    private porteroService: SerivcesService,
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.porteroService.getAll().subscribe( (porteroSnapshot : any) => {
      this.porteros= []
      porteroSnapshot.forEach((porteroData:any) =>
      {
        console.log(porteroData.payload.doc.data());
        this.porteros.push({
          id:porteroData.payload.doc.id,
          data:porteroData.payload.doc.data()
        })
      });
      console.log(this.porteros);
    })
  }
}
