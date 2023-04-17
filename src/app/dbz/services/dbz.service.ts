import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes:Personaje[] = [
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 15000
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  get personajes(): Personaje[]{
    //Los objetos en JS son mandados por referencia
    //Para evitar y romper esa relación que tiene JS.
    //Utilizaremos el operador spread el cual separa cada
    //uno de los elementos independientes que tiene este
    //arreglo y crea uno nuevo. Esto rompe la referencia
    //con el array delos personajes y se rompe esa relación

    return [...this._personajes];
  }

  agregarPersonajes(personaje:Personaje) {

      const nuevoPersonaje: Personaje = { id: uuid(), ...personaje };

      this._personajes.push(personaje);
  }

  borrarPersonajePorId(id: string){
    //filter va a regresar un nuevo array con la condición que pongamos.
    //filter mirar cada elemento del array y retorna los que cumplan la condición (true)
    this._personajes = this._personajes.filter( personaje => personaje.id !== id);
  }
}




