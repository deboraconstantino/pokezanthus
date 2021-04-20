import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

  columns(): Array<any> {
    return ['Nome', 'Tipo', 'Altura', 'Peso'];
  }
}
