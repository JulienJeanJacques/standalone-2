import { TestBed } from '@angular/core/testing';

import { PathImagesService } from './path-images.service';

describe('PathImagesService', () => {
  let service: PathImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
