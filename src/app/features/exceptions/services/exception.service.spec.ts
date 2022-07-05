import { TestBed } from '@angular/core/testing';

import { ExceptionService } from './exception.service';

describe('ExceptioneService', () => {
  let service: ExceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});