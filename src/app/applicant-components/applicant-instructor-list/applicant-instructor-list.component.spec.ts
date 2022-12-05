import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantInstructorListComponent } from './applicant-instructor-list.component';

describe('ApplicantInstructorListComponent', () => {
  let component: ApplicantInstructorListComponent;
  let fixture: ComponentFixture<ApplicantInstructorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantInstructorListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantInstructorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
