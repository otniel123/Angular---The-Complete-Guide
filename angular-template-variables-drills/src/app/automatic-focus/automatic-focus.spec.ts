import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticFocus } from './automatic-focus';

describe('AutomaticFocus', () => {
  let component: AutomaticFocus;
  let fixture: ComponentFixture<AutomaticFocus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomaticFocus],
    }).compileComponents();

    fixture = TestBed.createComponent(AutomaticFocus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
