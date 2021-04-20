import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  countries = [
    {
      id: 1
    },
    {id: 2}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
