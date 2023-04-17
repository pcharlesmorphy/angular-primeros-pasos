import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'

})

export class AgregarComponent {

  @Input() nuevo:Personaje = {
    nombre:'',
    poder: 0
  }

  @Input('index') index:number = 0;

  constructor (private dbzService: DbzService){}
   agregar():void{
    //Si el input que envia el valor de nombre está vacío
    //sale del método sin hacer nada
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    this.dbzService.agregarPersonajes(this.nuevo);
    // Resetear valores del objeto
    this.nuevo = {
      nombre:'',
      poder:0
    }
  }
}



