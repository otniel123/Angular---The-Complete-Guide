import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipHostComponent } from './tooltip-host-component';

describe('TooltipHostComponent', () => {
  let component: TooltipHostComponent;
  let fixture: ComponentFixture<TooltipHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TooltipHostComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
