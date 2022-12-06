import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorAddApplicantBlacklistComponent } from './instructor-add-applicant-blacklist.component';

describe('InstructorAddApplicantBlacklistComponent', () => {
  let component: InstructorAddApplicantBlacklistComponent;
  let fixture: ComponentFixture<InstructorAddApplicantBlacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorAddApplicantBlacklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorAddApplicantBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
