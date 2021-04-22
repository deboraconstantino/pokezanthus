import { PokemonsService } from './../../../shared/services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons: Array<any>;
  columns: Array<any>;
  offset = 0;
  limit = 10;

  constructor(
    private pokemonsService: PokemonsService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.columns = this.pokemonsService.columns();
    this.pokemons = this.pokemonsService.getAll(0, 10);
  }

  openTypes(content) {
    this.modalService.open(content)
  }

  next(): void {
    this.offset += 10
    this.pokemons = this.pokemonsService.getAll(this.offset, 10);
  }

  previous(): void {
    this.offset -= 10
    this.pokemons = this.pokemonsService.getAll(this.offset, 10);
  }

}

