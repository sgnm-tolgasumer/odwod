import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainChartComponent } from './admin-main-chart.component';

describe('AdminMainChartComponent', () => {
  let component: AdminMainChartComponent;
  let fixture: ComponentFixture<AdminMainChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMainChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
