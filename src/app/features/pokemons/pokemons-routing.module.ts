import { PokemonsFormComponent } from './pokemons-form/pokemons-form.component';
import { PokemonsListComponent } from './pokemons-list/pokemons-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: PokemonsListComponent },
  { path: ':id', component: PokemonsFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
