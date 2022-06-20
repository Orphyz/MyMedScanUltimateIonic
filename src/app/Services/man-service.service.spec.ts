import { TestBed } from '@angular/core/testing';

import { ManServiceService } from './man-service.service';

describe('ManServiceService', () => {
  let service: ManServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
