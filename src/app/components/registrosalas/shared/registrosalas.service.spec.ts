import { TestBed } from '@angular/core/testing';

import { RegistrosalasService } from './registrosalas.service';

describe('RegistrosalasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrosalasService = TestBed.get(RegistrosalasService);
    expect(service).toBeTruthy();
  });
});
