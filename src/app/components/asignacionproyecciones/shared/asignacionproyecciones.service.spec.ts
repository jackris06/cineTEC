import { TestBed } from '@angular/core/testing';

import { AsignacionproyeccionesService } from './asignacionproyecciones.service';

describe('AsignacionproyeccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsignacionproyeccionesService = TestBed.get(AsignacionproyeccionesService);
    expect(service).toBeTruthy();
  });
});
