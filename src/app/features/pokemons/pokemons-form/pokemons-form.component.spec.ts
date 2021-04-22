import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { PokemonsFormComponent } from './pokemons-form.component';
import { RouterModule } from '@angular/router';

describe('O componente PokemonsFormComponent', () => {
  let component: PokemonsFormComponent;
  let fixture: ComponentFixture<PokemonsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        HttpClientTestingModule
      ],
      providers: [
        FormBuilder
      ],
      declarations: [ PokemonsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });
});
