import { TestBed } from '@angular/core/testing';

import { FindTheNextItemService } from './find-the-next-item.service';

describe('FindTheNextItemService', () => {
  let service: FindTheNextItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindTheNextItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
