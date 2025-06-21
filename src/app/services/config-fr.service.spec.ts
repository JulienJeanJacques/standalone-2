import { TestBed } from '@angular/core/testing';

import { ConfigFrService } from './config-fr.service';

describe('ConfigFrService', () => {
  let service: ConfigFrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigFrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
