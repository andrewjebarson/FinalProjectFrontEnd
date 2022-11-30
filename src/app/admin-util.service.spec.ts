import { TestBed } from '@angular/core/testing';

import { AdminUtilService } from './admin-util.service';

describe('AdminUtilService', () => {
  let service: AdminUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
