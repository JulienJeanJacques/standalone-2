import { TestBed } from '@angular/core/testing';

import { HeaderLevelService } from './header-level.service';

describe('HeaderLevelService', () => {
  let service: HeaderLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
