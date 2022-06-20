import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentService } from 'src/app/core/services/appointmentService/appointment.service';
import { AppointmentsPageComponent } from '../appointments-page/appointments-page.component';

@Component({
  selector: 'app-delete-appointment-dialog',
  templateUrl: './delete-appointment-dialog.component.html',
  styleUrls: ['./delete-appointment-dialog.component.sass']
})
export class DeleteAppointmentDialogComponent implements OnInit {

  id: number;
  disease: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data : {id: number, disease: string},
    public dialogRef: MatDialogRef<AppointmentsPageComponent>,
    private appointmentService : AppointmentService) {
    this.id = data.id;
    this.disease = data.disease;
   }

  ngOnInit(): void {
  }

  onDeleteAppointment(): void{
    this.appointmentService.deleteById(this.id).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}