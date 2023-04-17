import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  template: `
  <h3>Personajes</h3>
    <hr>
    <ul class="list-group-item">
      <li class="list-group-item d-flex justify-content-between align-items-center"
      *ngFor="let personaje of personajes; let i=index; let isEven=even; let isLast=last"
      [ngClass]="{
        'list-group-item-success': isEven,
        'list-group-item-danger':isLast}
        ">
      <div>
          <span class="text-primary"> {{i+1}}. </span>
          <span> {{personaje.nombre}} - </span>
          <strong>Poder: </strong>
          <span>{{personaje.poder | number}}</span>
      </div>

      <button class="btn btn-danger" (click)="borrarPersonajePorId(personaje.id || '')">X</button>
    </li>
    </ul>
    `
})
export class PersonajesComponent {
   get personajes(){
    return this.dbzService.personajes;
   }

   constructor(private dbzService:DbzService) {

   }

   borrarPersonajePorId(index:string):void{
      this.dbzService.borrarPersonajePorId(index);
   }

}

