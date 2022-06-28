import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProcedureDialogComponent } from './edit-procedure-dialog.component';

describe('EditProcedureDialogComponent', () => {
  let component: EditProcedureDialogComponent;
  let fixture: ComponentFixture<EditProcedureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProcedureDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProcedureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
