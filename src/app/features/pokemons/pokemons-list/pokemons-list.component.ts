import { PokemonsService } from './../../../shared/services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/** Componente para listagem de pokemons. */
@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})

export class PokemonsListComponent implements OnInit {
  pokemons: Array<any>;
  columns: Array<any>;
  offset = 0;

  /** Método constructor */
  constructor(
    private pokemonsService: PokemonsService,
    private modalService: NgbModal
  ) { }

  /** Método para inicialização do componente. Devem ser carregadas as colunas para apresentação da tabela e os
   * registros para serem exibidos. */
  ngOnInit(): void {
    this.columns = this.pokemonsService.columns();
    this.pokemons = this.pokemonsService.getAll(0, 10);
  }

  /** Método que realiza a abertura do modal para apresentação dos tipos de um pokemon. */
  openTypes(content): void {
    this.modalService.open(content);
  }

  /** Método que avança 1 página para carregamento de mais registros. */
  next(): void {
    this.offset += 10;
    this.pokemons = this.pokemonsService.getAll(this.offset, 10);
  }

  /** Método que retorna 1 página para carregamento de mais registros. */
  previous(): void {
    this.offset -= 10;
    this.pokemons = this.pokemonsService.getAll(this.offset, 10);
  }

}

