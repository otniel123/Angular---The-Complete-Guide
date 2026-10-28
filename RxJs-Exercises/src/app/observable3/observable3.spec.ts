import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable3 } from './observable3';

describe('Observable3', () => {
  let component: Observable3;
  let fixture: ComponentFixture<Observable3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Observable3],
    }).compileComponents();

    fixture = TestBed.createComponent(Observable3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
