import { TestBed } from '@angular/core/testing';

import { RegistrocinesService } from './registrocines.service';

describe('RegistrocinesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrocinesService = TestBed.get(RegistrocinesService);
    expect(service).toBeTruthy();
  });
});
