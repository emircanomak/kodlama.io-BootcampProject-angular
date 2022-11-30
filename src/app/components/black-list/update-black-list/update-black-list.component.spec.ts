import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBlackListComponent } from './update-black-list.component';

describe('UpdateBlackListComponent', () => {
  let component: UpdateBlackListComponent;
  let fixture: ComponentFixture<UpdateBlackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBlackListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBlackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
