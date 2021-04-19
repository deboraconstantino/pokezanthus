import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsFormComponent } from './pokemons-form.component';

describe('PokemonsFormComponent', () => {
  let component: PokemonsFormComponent;
  let fixture: ComponentFixture<PokemonsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
