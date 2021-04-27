import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDoneWorkordersTableComponent } from './customer-done-workorders-table.component';

describe('CustomerDoneWorkordersTableComponent', () => {
  let component: CustomerDoneWorkordersTableComponent;
  let fixture: ComponentFixture<CustomerDoneWorkordersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDoneWorkordersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDoneWorkordersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
