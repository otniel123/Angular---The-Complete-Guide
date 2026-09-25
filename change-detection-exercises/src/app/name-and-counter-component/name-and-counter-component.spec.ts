import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndCounterComponent } from './name-and-counter-component';

describe('NameAndCounterComponent', () => {
  let component: NameAndCounterComponent;
  let fixture: ComponentFixture<NameAndCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameAndCounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NameAndCounterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
