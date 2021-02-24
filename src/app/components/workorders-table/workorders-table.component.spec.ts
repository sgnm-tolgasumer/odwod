import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkordersTableComponent } from './workorders-table.component';

describe('WorkordersTableComponent', () => {
  let component: WorkordersTableComponent;
  let fixture: ComponentFixture<WorkordersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkordersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkordersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
