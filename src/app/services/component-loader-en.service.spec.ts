import { TestBed } from '@angular/core/testing';

import { ComponentLoaderEnService } from './component-loader-en.service';

describe('ComponentLoaderEnService', () => {
  let service: ComponentLoaderEnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentLoaderEnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
