import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorBlacklistComponent } from './instructor-blacklist.component';

describe('InstructorBlacklistComponent', () => {
  let component: InstructorBlacklistComponent;
  let fixture: ComponentFixture<InstructorBlacklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorBlacklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorBlacklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
