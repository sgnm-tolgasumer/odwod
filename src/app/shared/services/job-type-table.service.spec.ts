import { TestBed } from '@angular/core/testing';

import { JobTypeTableService } from './job-type-table.service';

describe('JobTypeTableService', () => {
  let service: JobTypeTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobTypeTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
