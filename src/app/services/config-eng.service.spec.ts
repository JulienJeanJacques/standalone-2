import { TestBed } from '@angular/core/testing';

import { ConfigEngService } from './config-eng.service';

describe('ConfigEngService', () => {
  let service: ConfigEngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigEngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
