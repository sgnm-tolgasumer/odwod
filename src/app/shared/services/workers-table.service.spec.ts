import { TestBed } from '@angular/core/testing';

import { WorkersTableService } from './workers-table.service';

describe('WorkersTableService', () => {
  let service: WorkersTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkersTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
