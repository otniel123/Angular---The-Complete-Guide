import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlaceComponent } from './delete-place-component';

describe('DeletePlaceComponent', () => {
  let component: DeletePlaceComponent;
  let fixture: ComponentFixture<DeletePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePlaceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeletePlaceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
