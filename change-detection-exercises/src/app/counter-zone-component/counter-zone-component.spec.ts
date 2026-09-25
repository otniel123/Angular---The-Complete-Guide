import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterZoneComponent } from './counter-zone-component';

describe('CounterZoneComponent', () => {
  let component: CounterZoneComponent;
  let fixture: ComponentFixture<CounterZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterZoneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterZoneComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
