import { TestBed } from '@angular/core/testing';

import { SettingsFromToDDService } from './settingsFromToDD.service';

describe('SettingsService', () => {
  let service: SettingsFromToDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsFromToDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
