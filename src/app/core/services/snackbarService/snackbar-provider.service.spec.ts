import { TestBed } from '@angular/core/testing';

import { SnackbarProviderService } from './snackbar-provider.service';

describe('SnackbarProviderService', () => {
  let service: SnackbarProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackbarProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
