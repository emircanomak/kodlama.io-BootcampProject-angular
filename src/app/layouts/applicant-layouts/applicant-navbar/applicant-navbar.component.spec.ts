import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantNavbarComponent } from './applicant-navbar.component';

describe('ApplicantNavbarComponent', () => {
  let component: ApplicantNavbarComponent;
  let fixture: ComponentFixture<ApplicantNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
