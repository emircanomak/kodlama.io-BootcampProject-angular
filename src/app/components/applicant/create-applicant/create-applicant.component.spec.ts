import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApplicantComponent } from './create-applicant.component';

describe('CreateApplicantComponent', () => {
  let component: CreateApplicantComponent;
  let fixture: ComponentFixture<CreateApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
