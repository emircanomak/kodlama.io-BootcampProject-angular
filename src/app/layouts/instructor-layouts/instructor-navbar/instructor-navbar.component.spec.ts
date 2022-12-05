import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorNavbarComponent } from './instructor-navbar.component';

describe('InstructorNavbarComponent', () => {
  let component: InstructorNavbarComponent;
  let fixture: ComponentFixture<InstructorNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
