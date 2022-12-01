import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApplicantComponent } from './detail-applicant.component';

describe('DetailApplicantComponent', () => {
  let component: DetailApplicantComponent;
  let fixture: ComponentFixture<DetailApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
