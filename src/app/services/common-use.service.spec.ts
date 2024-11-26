import { TestBed } from '@angular/core/testing';

import { CommonUseService } from './common-use.service';

describe('CommonUseService', () => {
  let service: CommonUseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonUseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
