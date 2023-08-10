import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSimpleComponent } from './rm-modal-simple.component';

describe('ModalSimpleComponent', () => {
  let component: ModalSimpleComponent;
  let fixture: ComponentFixture<ModalSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
