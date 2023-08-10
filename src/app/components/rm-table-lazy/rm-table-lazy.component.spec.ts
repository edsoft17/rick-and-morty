import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmTableLazyComponent } from './rm-table-lazy.component';

describe('RmTableLazyComponent', () => {
  let component: RmTableLazyComponent;
  let fixture: ComponentFixture<RmTableLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmTableLazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmTableLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
