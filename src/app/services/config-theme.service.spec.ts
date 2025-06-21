import { TestBed } from '@angular/core/testing';

import { ConfigThemeService } from './config-theme.service';

describe('ConfigThemeService', () => {
  let service: ConfigThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
