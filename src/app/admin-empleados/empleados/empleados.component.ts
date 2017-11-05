import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../../servicios/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados: any;
  
    constructor( private EmpleadosService : EmpleadosService) { }
    ngOnInit() {
      this.empleados = this.EmpleadosService.getEmpleados();
    }

}
