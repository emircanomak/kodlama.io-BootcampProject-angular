import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlackListComponent } from './add-black-list.component';

describe('AddBlackListComponent', () => {
  let component: AddBlackListComponent;
  let fixture: ComponentFixture<AddBlackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBlackListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBlackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
