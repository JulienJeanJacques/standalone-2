import { TestBed } from '@angular/core/testing';

import { ConversionTypesService } from './conversion-types.service';

describe('ConversionTypesService', () => {
  let service: ConversionTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversionTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
