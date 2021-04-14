import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTypeTableComponent } from './job-type-table.component';

describe('JobTypeTableComponent', () => {
  let component: JobTypeTableComponent;
  let fixture: ComponentFixture<JobTypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobTypeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
