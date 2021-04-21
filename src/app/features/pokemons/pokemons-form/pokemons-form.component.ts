import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemons-form',
  templateUrl: './pokemons-form.component.html',
  styleUrls: ['./pokemons-form.component.css']
})
export class PokemonsFormComponent implements OnInit {
  pokeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildPokeForm();
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

}
