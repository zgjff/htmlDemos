import { TestBed } from '@angular/core/testing';

import { OverlayProductsService } from './overlay-products.service';

describe('OverlayProductsService', () => {
  let service: OverlayProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
