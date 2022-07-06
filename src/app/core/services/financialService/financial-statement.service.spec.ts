import { TestBed } from '@angular/core/testing';

import { FinancialStatementService } from './financial-statement.service';

describe('FinancialStatementService', () => {
  let service: FinancialStatementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialStatementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
