import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayProductsComponent } from './overlay-products.component';

describe('OverlayProductsComponent', () => {
  let component: OverlayProductsComponent;
  let fixture: ComponentFixture<OverlayProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
