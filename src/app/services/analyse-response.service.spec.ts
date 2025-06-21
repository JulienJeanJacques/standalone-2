import { TestBed } from '@angular/core/testing';

import { AnalyseResponseService } from './analyse-response.service';

describe('AnalyseResponseService', () => {
  let service: AnalyseResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyseResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
