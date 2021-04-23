import { PokemonsService } from './../../../shared/services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

/** Componente para visualização dos detalhes de um registro. */
@Component({
  selector: 'app-pokemons-form',
  templateUrl: './pokemons-form.component.html',
  styleUrls: ['./pokemons-form.component.css']
})

export class PokemonsFormComponent implements OnInit {
  pokeForm: FormGroup;
  pokemon: any;

  /** Método constructor */
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  /** Método para inicialização do componente.
   * O formulário deve ser iniciado, assim como deve-se retornar os dados do registro que está sendo
   * visualizado.
   */
  ngOnInit(): void {
    this.buildPokeForm();
    this.loadPoke();
  }

  /** Inicialização do formulário para apresentação dos dados. */
  private buildPokeForm(): void {
    this.pokeForm = this.formBuilder.group({
      id: [null],
      name: [null],
      type: [null],
      height: [null],
      weight: [null],
      image: [null],
      ability: [null]
    });
  }

  /** Método responsável por carregar os dados do registro que está sendo visualizado. */
  private loadPoke(): void {
    const pokeId = this.activatedRoute.snapshot.params.id;

    this.pokemonsService.getById(pokeId).subscribe(
      res => {
        this.pokemon = res,
        this.pokeForm.patchValue(this.pokemon);
      },
      err => console.log(err)
    );
  }
}
