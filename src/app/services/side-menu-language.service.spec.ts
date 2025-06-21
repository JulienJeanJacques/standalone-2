import { TestBed } from '@angular/core/testing';

import { SideMenuLanguageService } from './side-menu-language.service';

describe('SideMenuLanguageService', () => {
  let service: SideMenuLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideMenuLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
