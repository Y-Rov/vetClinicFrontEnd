import { TestBed } from '@angular/core/testing';

import { EditorConfigProviderService } from './editor-config-provider.service';

describe('EditorConfigProviderService', () => {
  let service: EditorConfigProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorConfigProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
