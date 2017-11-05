import { Injectable } from '@angular/core';

@Injectable()
export class EmpleadosService {
  getEmpleados(){
    return this.empleados;
  }

  empleados: any =[{
    nombre: 'sadasdas',
    direccion: 'bachoco #1798',    
    rfc:'SORCP9812',
    telefono: 66814845489,
    nss:'AS12312DSA343',    
    estado: 'ACTIVO',
    

  }]
  constructor() { }

}
