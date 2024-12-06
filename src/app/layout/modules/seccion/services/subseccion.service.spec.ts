import { TestBed } from '@angular/core/testing';

import { SubseccionService } from './subseccion.service';

describe('SubseccionService', () => {
  let service: SubseccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubseccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
