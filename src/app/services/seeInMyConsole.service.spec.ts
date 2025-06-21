import { TestBed } from '@angular/core/testing';

import { SeeInMyConsoleService } from './seeInMyConsole.service';

describe('SeeInMyConsoleService', () => {
  let service: SeeInMyConsoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeInMyConsoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
