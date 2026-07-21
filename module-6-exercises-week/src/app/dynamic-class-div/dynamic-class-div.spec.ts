import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClassDiv } from './dynamic-class-div';

describe('DynamicClassDiv', () => {
  let component: DynamicClassDiv;
  let fixture: ComponentFixture<DynamicClassDiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicClassDiv],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicClassDiv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
