import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceByIdComponent } from './place-by-id-component';

describe('PlaceByIdComponent', () => {
  let component: PlaceByIdComponent;
  let fixture: ComponentFixture<PlaceByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceByIdComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceByIdComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
