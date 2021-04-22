import { environment } from './../../../environments/environment';
import { PokeTable, PokeResponse } from './../mock-test/mock-const';
import { fakeAsync, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonsService } from './pokemons.service';

describe('O serviço PokemonsService', () => {
  let service: PokemonsService;
  let httpMock: HttpTestingController;
  const URL = environment.apiURL;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokemonsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar as colunas da tabela', () => {
    expect(service.columns()).toEqual(PokeTable);
  });

  it('Deve retornar um pokemon pelo id', fakeAsync(() => {
    service.getById('1').subscribe(res => {
      expect(res).toEqual(PokeResponse);
    });

    const req = httpMock.expectOne(`${URL}1`);
    expect(req.request.method).toEqual('GET');
    req.flush(PokeResponse);
    httpMock.verify();
  }));
});
