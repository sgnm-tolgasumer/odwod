import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkorderFormComponent } from './create-workorder-form.component';

describe('CreateWorkorderFormComponent', () => {
  let component: CreateWorkorderFormComponent;
  let fixture: ComponentFixture<CreateWorkorderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkorderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkorderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
