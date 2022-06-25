import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBaseEditComponent } from './user-base-edit.component';

describe('UserBaseEditComponent', () => {
  let component: UserBaseEditComponent;
  let fixture: ComponentFixture<UserBaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBaseEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
