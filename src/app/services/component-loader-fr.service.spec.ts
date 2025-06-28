import { TestBed } from '@angular/core/testing';

import { ComponentLoaderFrService } from './component-loader-fr.service';

describe('ComponentLoaderFrService', () => {
  let service: ComponentLoaderFrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLoaderFrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
