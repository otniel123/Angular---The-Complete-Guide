import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducCardComponent } from './produc-card-component';

describe('ProducCardComponent', () => {
  let component: ProducCardComponent;
  let fixture: ComponentFixture<ProducCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProducCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
