import { TestBed } from '@angular/core/testing';

import { RegistropeliculasService } from './registropeliculas.service';

describe('RegistropeliculasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistropeliculasService = TestBed.get(RegistropeliculasService);
    expect(service).toBeTruthy();
  });
});
