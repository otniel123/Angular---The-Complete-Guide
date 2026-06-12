import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTitleAlert } from './delete-title-alert';

describe('DeleteTitleAlert', () => {
  let component: DeleteTitleAlert;
  let fixture: ComponentFixture<DeleteTitleAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTitleAlert],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteTitleAlert);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
