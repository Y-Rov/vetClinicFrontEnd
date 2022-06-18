import { TestBed } from '@angular/core/testing';

import { ProcedureService } from './procedure.service';

describe('ProcedureService', () => {
  let service: ProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
