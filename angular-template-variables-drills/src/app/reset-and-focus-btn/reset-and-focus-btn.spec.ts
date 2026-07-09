import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAndFocusBtn } from './reset-and-focus-btn';

describe('ResetAndFocusBtn', () => {
  let component: ResetAndFocusBtn;
  let fixture: ComponentFixture<ResetAndFocusBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetAndFocusBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(ResetAndFocusBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
