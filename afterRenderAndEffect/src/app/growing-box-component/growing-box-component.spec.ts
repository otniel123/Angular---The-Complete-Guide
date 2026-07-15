import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingBoxComponent } from './growing-box-component';

describe('GrowingBoxComponent', () => {
  let component: GrowingBoxComponent;
  let fixture: ComponentFixture<GrowingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowingBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GrowingBoxComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
