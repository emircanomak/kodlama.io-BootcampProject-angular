import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInstructorComponent } from './detail-instructor.component';

describe('DetailInstructorComponent', () => {
  let component: DetailInstructorComponent;
  let fixture: ComponentFixture<DetailInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
