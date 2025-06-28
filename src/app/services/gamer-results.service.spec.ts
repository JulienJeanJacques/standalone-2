import { TestBed } from '@angular/core/testing';

import { GamerResultsService } from './gamer-results.service';

describe('GamerResultsService', () => {
  let service: GamerResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamerResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
