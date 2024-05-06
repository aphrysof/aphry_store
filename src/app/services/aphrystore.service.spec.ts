import { TestBed } from '@angular/core/testing';

import { AphrystoreService } from './aphrystore.service';

describe('AphrystoreService', () => {
  let service: AphrystoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AphrystoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
