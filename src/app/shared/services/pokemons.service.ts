import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {
  URL = environment.apiURL;

  constructor(
    private http: HttpClient
  ) { }

  columns(): Array<any> {
    return ['#', 'Nome', 'Tipo', 'Altura', 'Peso'];
  }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.URL}${id}`);
  }

  getAll(): Array<any> {
    const pokemons = [];

    this.get().subscribe(
      res => res.results.map(
        a => this.getInfo(a).subscribe(
          b => {
            pokemons.push(b);
            pokemons.sort((x, y) => x.id < y.id ? -1 : x.id > y.id ? 1 : 0);
          }
        )
      )
    );

    return pokemons;
  }

  private get(): Observable<any> {
    return this.http.get(this.URL);
  }

  private getInfo(pokemon: any): Observable<any> {
    return this.http.get(pokemon.url);
  }
}
