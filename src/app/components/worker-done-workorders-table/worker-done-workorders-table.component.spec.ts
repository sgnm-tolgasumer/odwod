import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerDoneWorkordersTableComponent } from './worker-done-workorders-table.component';

describe('WorkerDoneWorkordersTableComponent', () => {
  let component: WorkerDoneWorkordersTableComponent;
  let fixture: ComponentFixture<WorkerDoneWorkordersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerDoneWorkordersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerDoneWorkordersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
