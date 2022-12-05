import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorFooterComponent } from './instructor-footer.component';

describe('InstructorFooterComponent', () => {
  let component: InstructorFooterComponent;
  let fixture: ComponentFixture<InstructorFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
