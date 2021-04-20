import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWorkordersTableComponent } from './customer-workorders-table.component';

describe('CustomerWorkordersTableComponent', () => {
  let component: CustomerWorkordersTableComponent;
  let fixture: ComponentFixture<CustomerWorkordersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWorkordersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWorkordersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
