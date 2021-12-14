import { TestBed } from '@angular/core/testing';

import { LoadMockDataService } from './load-mock-data.service';

describe('LoadMockDataService', () => {
  let service: LoadMockDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadMockDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
