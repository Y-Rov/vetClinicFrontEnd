import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressEditComponent } from './user-address-edit.component';

describe('UserAddressEditComponent', () => {
  let component: UserAddressEditComponent;
  let fixture: ComponentFixture<UserAddressEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddressEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
