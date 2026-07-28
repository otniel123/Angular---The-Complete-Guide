import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameExercise } from './full-name-exercise';

describe('FullNameExercise', () => {
  let component: FullNameExercise;
  let fixture: ComponentFixture<FullNameExercise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullNameExercise],
    }).compileComponents();

    fixture = TestBed.createComponent(FullNameExercise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
