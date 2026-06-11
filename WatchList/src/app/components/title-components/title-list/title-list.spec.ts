import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleList } from './title-list';

describe('TitleList', () => {
  let component: TitleList;
  let fixture: ComponentFixture<TitleList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleList],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
