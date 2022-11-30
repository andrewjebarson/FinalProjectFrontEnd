import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrViewComponent } from './pnr-view.component';

describe('PnrViewComponent', () => {
  let component: PnrViewComponent;
  let fixture: ComponentFixture<PnrViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnrViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PnrViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
