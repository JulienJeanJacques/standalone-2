import { TestBed } from '@angular/core/testing';

import { GestionConfigEngFrService } from './gestion-config-eng-fr.service';

describe('GestionConfigEngFrService', () => {
  let service: GestionConfigEngFrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionConfigEngFrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
