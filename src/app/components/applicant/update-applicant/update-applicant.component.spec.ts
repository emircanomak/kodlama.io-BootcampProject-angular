import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateApplicantComponent } from './update-applicant.component';

describe('UpdateApplicantComponent', () => {
  let component: UpdateApplicantComponent;
  let fixture: ComponentFixture<UpdateApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
