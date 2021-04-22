import { PokemonsService } from './../../../shared/services/pokemons.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons-form',
  templateUrl: './pokemons-form.component.html',
  styleUrls: ['./pokemons-form.component.css']
})
export class PokemonsFormComponent implements OnInit {
  pokeForm: FormGroup;
  pokemon: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.buildPokeForm();
    this.loadPoke();
  }

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

  private loadPoke(): void {
    const pokeId = this.activatedRoute.snapshot.params.id;

    this.pokemonsService.getById(pokeId).subscribe(
      res => {
        this.pokemon = res,
        this.pokeForm.patchValue(this.pokemon)
      },
      err => console.log(err)
    )
  }
}
