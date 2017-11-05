import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { AdminUsuarioComponent } from './Usuarios/admin-usuario/admin-usuario.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';
import { AddRegistrarComponent } from './Usuarios/add-registrar/add-registrar.component';

import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AccesarUsuarioComponent } from './Usuarios/accesar-usuario/accesar-usuario.component';
import { DatosUsuarioComponent } from './Usuarios/datos-usuario/datos-usuario.component';
import { PedidosComponent } from './Usuarios/pedidos/pedidos.component';
import { VentaServicioComponent } from './administrador/venta-servicio/venta-servicio.component';
import { AdminAdminComponent } from './administrador/admin-admin/admin-admin.component';
import { AdminPedidosComponent } from './administrador/admin-pedidos/admin-pedidos.component';

//import {AccordionModule} from 'primeng/primeng';     //accordion and accordion tab
//import {MenuItem} from 'primeng/primeng';  

import {AccordionModule} from 'primeng/components/accordion/accordion';
import {InputTextModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {CheckboxModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {SplitButtonModule} from 'primeng/primeng';
import {PanelModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FieldsetModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { ProveedoresComponent } from './admin-proveedores/proveedores/proveedores.component';
import { AddproveedoresComponent } from './admin-proveedores/addproveedores/addproveedores.component';

import { ProveedoresService } from './servicios/proveedores.service';
import { EmpleadosComponent } from './admin-empleados/empleados/empleados.component';
import { AddempleadosComponent } from './admin-empleados/addempleados/addempleados.component';
import { EmpleadosService } from './servicios/empleados.service';


const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'Usuarios/add-registrar', component: AddRegistrarComponent },
  { path: 'Usuarios/accesar-usuario', component: AccesarUsuarioComponent},
  { path: 'Usuarios/admin-usuario', component: AdminUsuarioComponent},
  { path: 'Usuarios/datos-usuario', component: DatosUsuarioComponent},
  { path: 'Usuarios/pedidos', component: PedidosComponent},
  { path: 'administrador/venta-servicio', component: VentaServicioComponent},
  { path: 'administrador/admin-admin', component: AdminAdminComponent},
  { path: 'administrador/admin-pedidos', component: AdminPedidosComponent},
  { path: 'admin-proveedores/proveedores', component: ProveedoresComponent},
  { path: 'addproveedores', component: AddproveedoresComponent},
  { path: 'admin-empleados/empleados', component: EmpleadosComponent},
  { path: 'addempleados', component: AddempleadosComponent},
  
  { path: '**', component: InicioComponent},
  
 

];

@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    AdminUsuarioComponent,
    GaleriaFotosComponent,
    AddRegistrarComponent,
    InicioComponent,
    AccesarUsuarioComponent,
    DatosUsuarioComponent,
    PedidosComponent,
    VentaServicioComponent,
    AdminAdminComponent,
    AdminPedidosComponent,
    ProveedoresComponent,
    AddproveedoresComponent,
    EmpleadosComponent,
    AddempleadosComponent

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    RadioButtonModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    PanelModule,
    AccordionModule,
    FieldsetModule,
    InputMaskModule,
    SharedModule,
    DataTableModule


  ],
  providers: [ProveedoresService,EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
