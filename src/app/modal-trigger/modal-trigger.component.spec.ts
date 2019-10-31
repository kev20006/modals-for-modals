import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTriggerComponent } from './modal-trigger.component';

describe('ModalTriggerComponent', () => {
  let component: ModalTriggerComponent;
  let fixture: ComponentFixture<ModalTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTriggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
