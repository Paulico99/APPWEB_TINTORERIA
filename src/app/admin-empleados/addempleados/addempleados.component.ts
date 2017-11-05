import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addempleados',
  templateUrl: './addempleados.component.html',
  styleUrls: ['./addempleados.component.css']
})
export class AddempleadosComponent implements OnInit {

  @ViewChild('formpro') formpro: NgForm;
  
estados : string[] = [
  'ACTIVO','INACTIVO'
]

  empleado:any;
constructor() { 
  this.empleado = {
    nombre : '',
    rfc : '',
    telefono : null,    
    nss : '',    
    direccion : '',
    estado: '',
  }
}

onSubmit(){
  this.empleado.nombre = this.formpro.value.nombre;
  this.empleado.rfc = this.formpro.value.rfc;
  this.empleado.telefono = this.formpro.value.telefono;
  this.empleado.nss = this.formpro.value.nss;  
  this.empleado.direccion = this.formpro.value.direccion;
  this.empleado.estado = this.formpro.value.estado;
  this.formpro.reset();
}
  ngOnInit() {
  }


}
