import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqWorkerComponent } from './faq-worker.component';

describe('FaqWorkerComponent', () => {
  let component: FaqWorkerComponent;
  let fixture: ComponentFixture<FaqWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
