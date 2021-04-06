import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqCustomerComponent } from './faq-customer.component';

describe('FaqCustomerComponent', () => {
  let component: FaqCustomerComponent;
  let fixture: ComponentFixture<FaqCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
