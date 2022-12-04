import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantFooterComponent } from './applicant-footer.component';

describe('ApplicantFooterComponent', () => {
  let component: ApplicantFooterComponent;
  let fixture: ComponentFixture<ApplicantFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
