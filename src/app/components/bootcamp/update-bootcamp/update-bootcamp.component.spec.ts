import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBootcampComponent } from './update-bootcamp.component';

describe('UpdateBootcampComponent', () => {
  let component: UpdateBootcampComponent;
  let fixture: ComponentFixture<UpdateBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
