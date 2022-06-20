import { TestBed } from '@angular/core/testing';

import { MypharmaService } from './mypharma.service';

describe('MypharmaService', () => {
  let service: MypharmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MypharmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
