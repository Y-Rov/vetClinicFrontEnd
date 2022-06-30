import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProcedureDialogComponent } from './delete-procedure-dialog.component';

describe('DeleteProcedureDialogComponent', () => {
  let component: DeleteProcedureDialogComponent;
  let fixture: ComponentFixture<DeleteProcedureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProcedureDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProcedureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
