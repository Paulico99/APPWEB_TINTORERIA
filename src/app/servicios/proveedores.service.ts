import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {
  getProveedores(){
    return this.proveedores;
  }

  proveedores: any =[{
    nombre: 'Telefonica Telcel',
    direccion:'paseo de la reforma',
    cp:'292920',
    localidad: 'CDMX',
    estado:'CDMX',
    telefono:123456789,
    email: 'cesarsoto96@hotmail.com',

  }]
  constructor() { }

}
