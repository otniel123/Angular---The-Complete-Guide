import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCustomPipes } from './simple-custom-pipes';

describe('SimpleCustomPipes', () => {
  let component: SimpleCustomPipes;
  let fixture: ComponentFixture<SimpleCustomPipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCustomPipes],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleCustomPipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
