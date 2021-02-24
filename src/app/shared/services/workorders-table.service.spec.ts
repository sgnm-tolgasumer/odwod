import { TestBed } from '@angular/core/testing';

import { WorkordersTableService } from './workorders-table.service';

describe('WorkordersTableService', () => {
  let service: WorkordersTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkordersTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
