import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable5 } from './observable5';

describe('Observable5', () => {
  let component: Observable5;
  let fixture: ComponentFixture<Observable5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observable5],
    }).compileComponents();

    fixture = TestBed.createComponent(Observable5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
