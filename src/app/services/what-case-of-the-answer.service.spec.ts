import { TestBed } from '@angular/core/testing';

import { WhatCaseOfTheAnswerService } from './what-case-of-the-answer.service';

describe('WhatCaseOfTheAnswerService', () => {
  let service: WhatCaseOfTheAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhatCaseOfTheAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
