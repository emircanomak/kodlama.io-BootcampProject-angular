import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBootcampComponent } from './detail-bootcamp.component';

describe('DetailBootcampComponent', () => {
  let component: DetailBootcampComponent;
  let fixture: ComponentFixture<DetailBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
