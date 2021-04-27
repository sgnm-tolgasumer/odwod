import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDoneWorkordersTableComponent } from './admin-done-workorders-table.component';

describe('AdminDoneWorkordersTableComponent', () => {
  let component: AdminDoneWorkordersTableComponent;
  let fixture: ComponentFixture<AdminDoneWorkordersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDoneWorkordersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDoneWorkordersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
