import { TestBed } from '@angular/core/testing';

import { HtmTitleService } from './htm-title.service';

describe('HtmTitleService', () => {
  let service: HtmTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
