import { TestBed } from '@angular/core/testing';

import { WorkorderTransferService } from './workorder-transfer.service';

describe('WorkorderTransferService', () => {
  let service: WorkorderTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkorderTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
