import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStats } from './contact-stats';

describe('ContactStats', () => {
  let component: ContactStats;
  let fixture: ComponentFixture<ContactStats>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactStats],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactStats);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
