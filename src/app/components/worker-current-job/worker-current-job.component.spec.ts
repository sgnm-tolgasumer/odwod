import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerCurrentJobComponent } from './worker-current-job.component';

describe('WorkerCurrentJobComponent', () => {
  let component: WorkerCurrentJobComponent;
  let fixture: ComponentFixture<WorkerCurrentJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerCurrentJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerCurrentJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
