import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyActions } from './fancy-actions';

describe('FancyActions', () => {
  let component: FancyActions;
  let fixture: ComponentFixture<FancyActions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FancyActions],
    }).compileComponents();

    fixture = TestBed.createComponent(FancyActions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
