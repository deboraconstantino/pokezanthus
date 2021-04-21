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
  closeResult;

  constructor(
    private pokemonsService: PokemonsService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.columns = this.pokemonsService.columns();
    this.pokemons = this.pokemonsService.getAll();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}

