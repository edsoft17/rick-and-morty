import { TestBed } from '@angular/core/testing';

import { ModalSimpleService } from './modal-simple.service';

describe('ModalSimpleService', () => {
  let service: ModalSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
