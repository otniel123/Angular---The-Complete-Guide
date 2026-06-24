import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLightCardComponent } from './high-light-card-component';

describe('HighLightCardComponent', () => {
  let component: HighLightCardComponent;
  let fixture: ComponentFixture<HighLightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighLightCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighLightCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
