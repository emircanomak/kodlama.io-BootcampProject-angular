import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlackListComponent } from './detail-black-list.component';

describe('DetailBlackListComponent', () => {
  let component: DetailBlackListComponent;
  let fixture: ComponentFixture<DetailBlackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBlackListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBlackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
