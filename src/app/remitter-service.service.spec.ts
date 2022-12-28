import { TestBed } from '@angular/core/testing';

import { RemitterServiceService } from './remitter-service.service';

describe('RemitterServiceService', () => {
  let service: RemitterServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemitterServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
