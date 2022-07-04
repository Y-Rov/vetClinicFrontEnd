import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAppointmentDialogComponent } from './delete-appointment-dialog.component';

describe('DeleteAppointmentDialogComponent', () => {
  let component: DeleteAppointmentDialogComponent;
  let fixture: ComponentFixture<DeleteAppointmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAppointmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAppointmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
