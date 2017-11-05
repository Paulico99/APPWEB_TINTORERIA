import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';



@Component({
  selector: 'app-venta-servicio',
  templateUrl: './venta-servicio.component.html',
  styleUrls: ['./venta-servicio.component.css']
})
export class VentaServicioComponent implements OnInit {

  vin;
  year;
  brand;
  color;

  loading: boolean;
  
      cols: any[];

  servicio: SelectItem[];
  persona: SelectItem[];
      val4: string;
      //selectedValue: string = 'val1';      
      val1: string;
      selectServicio: string;
      SelectPersona: string;
  
      constructor() {
          this.servicio = [];
          this.servicio.push({label:'Seleccione el servicio', value:null});
          this.servicio.push({label:'Lavado Seco', value:{id:1, name: 'Lavado Seco', code: 'LS'}});
          this.servicio.push({label:'Lavado Express', value:{id:2, name: 'Lavado Express', code: 'LEX'}});
          this.servicio.push({label:'Lavado De edredones', value:{id:3, name: 'Lavado de edredones', code: 'LE'}});
          this.servicio.push({label:'Servicio de planchado', value:{id:4, name: 'Planchado', code: 'P'}});

          this.persona= [];
          this.persona.push({label: 'Selecciona tipo de persona',value:null});
          this.persona.push({label:'Moral',value:{id:1,name: 'Moral' ,code: 'PM'}});
          this.persona.push({label:'Fisica',value:{id:1,name: 'Fisica' ,code: 'PF'}});
      }
  
  ngOnInit() {

    this.loading = true;
  
    this.cols = [
        {field: 'vin', header: 'Vin'},
        {field: 'year', header: 'Year'},
        {field: 'brand', header: 'Brand'},
        {field: 'color', header: 'Color'}
    ];
  }

}
