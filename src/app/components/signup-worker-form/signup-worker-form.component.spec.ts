import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupWorkerFormComponent } from './signup-worker-form.component';

describe('SignupWorkerFormComponent', () => {
  let component: SignupWorkerFormComponent;
  let fixture: ComponentFixture<SignupWorkerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupWorkerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupWorkerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
