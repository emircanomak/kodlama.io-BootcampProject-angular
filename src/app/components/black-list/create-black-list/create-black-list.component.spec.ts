import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlackListComponent } from './create-black-list.component';

describe('CreateBlackListComponent', () => {
  let component: CreateBlackListComponent;
  let fixture: ComponentFixture<CreateBlackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBlackListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBlackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
