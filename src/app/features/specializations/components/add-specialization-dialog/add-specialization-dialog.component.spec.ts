import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecializationDialogComponent } from './add-specialization-dialog.component';

describe('AddSpecializationDialogComponent', () => {
  let component: AddSpecializationDialogComponent;
  let fixture: ComponentFixture<AddSpecializationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpecializationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpecializationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
