import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFocusComponent } from './auto-focus-component';

describe('AutoFocusComponent', () => {
  let component: AutoFocusComponent;
  let fixture: ComponentFixture<AutoFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoFocusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoFocusComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
