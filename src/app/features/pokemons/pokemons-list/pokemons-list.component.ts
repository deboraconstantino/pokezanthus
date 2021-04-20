import { PokemonsService } from './../../../shared/services/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons = [
    {name: 'ivysaur'},
    {name: 'venusaur'}
  ];
  columns: Array<any>;

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.columns = this.pokemonsService.columns();
  }

}
