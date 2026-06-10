import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleForm } from './title-form';

describe('TitleForm', () => {
  let component: TitleForm;
  let fixture: ComponentFixture<TitleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleForm],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
