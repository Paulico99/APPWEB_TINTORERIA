import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup , FormBuilder, Validators } from '@angular/forms';

import { ProveedoresService } from '../../servicios/proveedores.service';

@Component({
  selector: 'app-addproveedores',
  templateUrl: './addproveedores.component.html',
  styleUrls: ['./addproveedores.component.css']
})
export class AddproveedoresComponent implements OnInit {


  proveedoresForm: FormGroup;
  proveedor: any;

estados : string[] = [
  'Aguascalientes','Chihuahua','Baja California','Sonora','Sinaloa','Nayarit','Jalisco','Colima','Guerrero','Oaxaca',
  'Chiapas','Quintana Roo', 'Yucatan','Campeche','Veracruz' ,'Tabasco','Puebla'
]

saveProveedores(){
  const saveProveedores = {
    nombres: this.proveedoresForm.get('nombres').value,
    rfc: this.proveedoresForm.get('rfc').value,
    direccion: this.proveedoresForm.get('direccion').value,
    codigopostal: this.proveedoresForm.get('codigopostal').value,
    localidad: this.proveedoresForm.get('localidad').value,
    estado: this.proveedoresForm.get('estado').value,
    telefono: this.proveedoresForm.get('telefono').value,
    correo: this.proveedoresForm.get('correo').value,
    
  };
  return saveProveedores;
}
constructor( private pf: FormBuilder) { 
  this.proveedoresForm = this.pf.group( {
    nombres : '',
    rfc : '',
    direccion : '',
    codigopostal :'',
    localidad: '',
    estado: '',
    telefono : null,
    correo : '',
  });
}

onSubmit(){
  this.proveedor = this.saveProveedores();
}
  ngOnInit() {
    this.proveedoresForm = this.pf.group({
      nombres: ['', Validators.required],
      rfc:  ['', Validators.required],
      direccion:  ['', Validators.required],
      codigopostal:  ['', Validators.required],
      localidad:  ['', Validators.required],
      estado:  ['', Validators.required],
      telefono:  ['', Validators.required],
      correo:  ['', Validators.required],
      
    });
  }

}
