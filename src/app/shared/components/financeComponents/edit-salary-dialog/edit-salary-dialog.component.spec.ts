import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalaryDialogComponent } from './edit-salary-dialog.component';

describe('EditSalaryDialogComponent', () => {
  let component: EditSalaryDialogComponent;
  let fixture: ComponentFixture<EditSalaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSalaryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSalaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
