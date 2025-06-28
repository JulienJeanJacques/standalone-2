import { TestBed } from '@angular/core/testing';

import { GoodResponsesService } from './good-responses.service';

describe('GoodResponsesService', () => {
  let service: GoodResponsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodResponsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
