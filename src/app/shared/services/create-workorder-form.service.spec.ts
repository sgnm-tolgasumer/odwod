import { TestBed } from '@angular/core/testing';

import { CreateWorkorderFormService } from './create-workorder-form.service';

describe('CreateWorkorderFormService', () => {
  let service: CreateWorkorderFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateWorkorderFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
