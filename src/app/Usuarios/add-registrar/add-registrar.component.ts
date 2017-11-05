import { Component, OnInit,ViewChild } from '@angular/core';
import { FormControl ,FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-registrar',
  templateUrl: './add-registrar.component.html',
  styleUrls: ['./add-registrar.component.css']
})
export class AddRegistrarComponent implements OnInit {
  registroCliente : FormGroup;
  registrarCliente: any;
  saveRegistro(){
    const saveRegistro = {
      nombres: this.registroCliente.get('nombres').value,
      apellidos: this.registroCliente.get('apellidos').value,
      telefono: this.registroCliente.get('telefono').value,
      direccion: this.registroCliente.get('direccion').value,
      correo: this.registroCliente.get('correo').value,      
      contrasena: this.registroCliente.get('contrasena').value,
      recontrasena: this.registroCliente.get('recontrasena').value,
    };
    return saveRegistro;
  }

  onSubmit(){
    this.registrarCliente = this.saveRegistro();
  }

  constructor( private rc: FormBuilder) {
  }

  ngOnInit() {
    this.registroCliente = this.rc.group({
      nombres : ['', Validators.required],
      apellidos: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],      
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
      recontrasena: ['', Validators.required],
    });
  }

}
