import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/** Serviço para manipulação da api poke-api. */
@Injectable({
  providedIn: 'root'
})

export class PokemonsService {
  URL = environment.apiURL;

  /** Método constructor */
  constructor(
    private http: HttpClient
  ) { }

  /** Método que retorna as colunas da tabela de apresentação dos dados de pokemon. */
  columns(): Array<any> {
    return ['#', 'Nome', 'Tipo', 'Altura', 'Peso'];
  }

  /** Método que retorna um registro filtrado pelo seu id. */
  getById(id: string): Observable<any> {
    return this.http.get(`${this.URL}${id}`);
  }

  /** Método que retorna todos os dados (retorno de 10 registros por página).
   * page: offset para o retorno;
   * pageSize: tamanho da página (sempre 10)
   */
  getAll(page: number, pageSize: number): Array<any> {
    const pokemons = [];

    this.get(page, pageSize).subscribe(
      res => res.results.map(
        a => this.getInfo(a).subscribe(
          b => {
            pokemons.push(b);
            pokemons.sort((x, y) => x.id < y.id ? -1 : x.id > y.id ? 1 : 0);
            console.log(pokemons);
          }
        )
      )
    );

    return pokemons;
  }

  /** Método que retorna todos os registros de pokemons.
   * page: offset para o retorno;
   * pageSize: tamanho da página (sempre 10)
   */
  private get(page: number, pageSize: number): Observable<any> {
    return this.http.get(`${this.URL}?offset=${page}&limit=${pageSize}`);
  }

  /** Método que retorna os detalhes de um registro específico. */
  private getInfo(pokemon: any): Observable<any> {
    return this.http.get(pokemon.url);
  }
}
