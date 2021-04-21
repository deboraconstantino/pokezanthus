import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { PokemonsFormComponent } from './pokemons-form/pokemons-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokemonsListComponent,
    PokemonsFormComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PokemonsModule { }
