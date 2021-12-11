import { TestBed } from '@angular/core/testing';

import { ExpandOrShrinkSidebarService } from './expand-or-shrink-sidebar.service';

describe('ExpandOrShrinkSidebarService', () => {
  let service: ExpandOrShrinkSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpandOrShrinkSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
