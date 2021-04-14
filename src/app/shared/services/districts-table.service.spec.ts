import { TestBed } from '@angular/core/testing';

import { DistrictsTableService } from './districts-table.service';

describe('DistrictsTableService', () => {
  let service: DistrictsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
