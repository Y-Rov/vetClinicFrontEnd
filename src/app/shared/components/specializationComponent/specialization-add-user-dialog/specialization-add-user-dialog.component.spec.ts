import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationAddUserDialogComponent } from './specialization-add-user-dialog.component';

describe('SpecializationAddUserDialogComponent', () => {
  let component: SpecializationAddUserDialogComponent;
  let fixture: ComponentFixture<SpecializationAddUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationAddUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationAddUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
