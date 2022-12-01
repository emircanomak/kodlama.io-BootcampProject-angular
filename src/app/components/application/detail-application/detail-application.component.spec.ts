import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailApplicationComponent } from './detail-application.component';

describe('DetailApplicationComponent', () => {
  let component: DetailApplicationComponent;
  let fixture: ComponentFixture<DetailApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
