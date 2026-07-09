import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardCompnent } from './user-card-compnent';

describe('UserCardCompnent', () => {
  let component: UserCardCompnent;
  let fixture: ComponentFixture<UserCardCompnent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardCompnent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCardCompnent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
