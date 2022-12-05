import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorApplicantListComponent } from './instructor-applicant-list.component';

describe('InstructorApplicantListComponent', () => {
  let component: InstructorApplicantListComponent;
  let fixture: ComponentFixture<InstructorApplicantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorApplicantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorApplicantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
