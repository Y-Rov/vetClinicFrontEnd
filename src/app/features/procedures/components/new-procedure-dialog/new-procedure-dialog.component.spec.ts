import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcedureDialogComponent } from './new-procedure-dialog.component';

describe('NewProcedureDialogComponent', () => {
  let component: NewProcedureDialogComponent;
  let fixture: ComponentFixture<NewProcedureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProcedureDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProcedureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
