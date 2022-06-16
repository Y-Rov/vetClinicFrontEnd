import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Appointment } from 'src/app/core/models/Appointment';
import { Procedure } from 'src/app/core/models/Procedure';
import { AppointmentService } from 'src/app/core/services/appointmentService/appointment.service';
import { AppointmentsPageComponent } from '../appointments-page/appointments-page.component';

const SAMPLE_DATA: Procedure[] =  [
  {
    "id" :  1,
    "name" : "first procedure",
    "description" : "operation",
    "duration" : 15,
    "cost" : 100,

    specializations : [{
      "id" :  1,
      "name" : "first spec" 
    }]},

  {
      "id" :  2,
      "name" : "second procedure",
      "description" : "operation",
      "duration" : 10,
      "cost" : 300,
      specializations : [{
        "id" :  1,
        "name" : "first spec"
    }]}
  ]

@Component({
  selector: 'app-new-appointment-dialog',
  templateUrl: './new-appointment-dialog.component.html',
  styleUrls: ['./new-appointment-dialog.component.sass']
})
export class NewAppointmentDialogComponent implements OnInit {
  
  procedures: Procedure[] = [];
  selectedprocedure: Procedure[] = [];
  isSelectionChanged: boolean = false;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
  public dialogRef: MatDialogRef<AppointmentsPageComponent>,
  private appointmentService : AppointmentService) {  
    this.procedures = SAMPLE_DATA;
  }

  form = new FormGroup({

    date: new FormControl(new Date(), Validators.min(30)),  //see in future
    disease: new FormControl("", [Validators.minLength(3),Validators.maxLength(255)])
  });
  
  ngOnInit(): void {
  }

  onSaveForm(): void{
    const finalData : Appointment = this.form.value as Appointment;
    finalData.procedures = this.selectedprocedure;
    this.appointmentService.addAppointment(finalData).subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onMultiSelectSubmit(event : any) : void{
    const key: string = event.key;
    this.selectedprocedure = [...event.data ] as Procedure[];
    this.isSelectionChanged = event.isChanged;
  }

  isButtonEnabled(): boolean{
    return this.form.valid && (this.form.dirty || this.isSelectionChanged); 
  }

}
