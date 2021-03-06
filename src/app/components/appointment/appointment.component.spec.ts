import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppoinmentComponent } from './appointment.component';

describe('AppoinmentComponent', () => {
  let component: AppoinmentComponent;
  let fixture: ComponentFixture<AppoinmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppoinmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppoinmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
