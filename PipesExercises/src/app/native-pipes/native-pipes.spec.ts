import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativePipes } from './native-pipes';

describe('NativePipes', () => {
  let component: NativePipes;
  let fixture: ComponentFixture<NativePipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativePipes],
    }).compileComponents();

    fixture = TestBed.createComponent(NativePipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
