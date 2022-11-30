import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainpaymentComponent } from './trainpayment.component';

describe('TrainpaymentComponent', () => {
  let component: TrainpaymentComponent;
  let fixture: ComponentFixture<TrainpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainpaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
