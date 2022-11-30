import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBootcampComponent } from './create-bootcamp.component';

describe('CreateBootcampComponent', () => {
  let component: CreateBootcampComponent;
  let fixture: ComponentFixture<CreateBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
