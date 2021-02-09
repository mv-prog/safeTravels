import { TestBed } from '@angular/core/testing';

import { HdataService } from './hdata.service';

describe('HdataService', () => {
  let service: HdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
