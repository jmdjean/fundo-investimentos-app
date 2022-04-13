import { TestBed } from '@angular/core/testing';

import { BaseResourceService } from './base-resource.service';

describe('BaseResourceService', () => {
  let service: BaseResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
