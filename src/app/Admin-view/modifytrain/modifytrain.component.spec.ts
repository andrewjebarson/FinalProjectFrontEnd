import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifytrainComponent } from './modifytrain.component';

describe('ModifytrainComponent', () => {
  let component: ModifytrainComponent;
  let fixture: ComponentFixture<ModifytrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifytrainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifytrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
