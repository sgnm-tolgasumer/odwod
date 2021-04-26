import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActiveWorkordersTableComponent } from './admin-active-workorders-table.component';

describe('AdminActiveWorkordersTableComponent', () => {
  let component: AdminActiveWorkordersTableComponent;
  let fixture: ComponentFixture<AdminActiveWorkordersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminActiveWorkordersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActiveWorkordersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
