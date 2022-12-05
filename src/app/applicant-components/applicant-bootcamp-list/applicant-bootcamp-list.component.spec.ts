import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantBootcampListComponent } from './applicant-bootcamp-list.component';

describe('ApplicantBootcampListComponent', () => {
  let component: ApplicantBootcampListComponent;
  let fixture: ComponentFixture<ApplicantBootcampListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantBootcampListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantBootcampListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
