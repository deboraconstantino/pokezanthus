import { element } from 'protractor';
import { PokemonsService } from './../../../shared/services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { Observable, Subscription, forkJoin } from 'rxjs';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.css']
})
export class PokemonsListComponent implements OnInit {
  pokemons: Array<any>;
  columns: Array<any>;
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

  showMore(): void {
    this.limit += 10;
    this.pokemons = this.pokemonsService.getAll(0, this.limit);
  }

}

