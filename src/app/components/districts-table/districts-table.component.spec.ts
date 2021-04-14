import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictsTableComponent } from './districts-table.component';

describe('DistrictsTableComponent', () => {
  let component: DistrictsTableComponent;
  let fixture: ComponentFixture<DistrictsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
