import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Appointment } from 'src/app/core/models/Appointment';
import { Procedure } from 'src/app/core/models/Procedure';
import { User } from 'src/app/core/models/User';
import { AppointmentService } from 'src/app/core/services/appointmentService/appointment.service';
import { AppointmentsPageComponent } from '../appointments-page/appointments-page.component';

const SAMPLE_DATA_PROCEDURES: Procedure[] =  [
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

//   const SAMPLE_DATA_USERS: User[] =  [
//     {
//       "id" :  1,
//       "firstName" : "Ivan",
//       "lastName" : "Ivanov",
//       "email" : "Ivanov@gmail.com",
//       "phoneNumber" :"0987654432",
//       "birthDate": new Date()
//   },
  
//   {
//     "id" :  2,
//     "firstName" : "Vasya",
//     "lastName" : "Pypkin",
//     "email" : "Vasya123@gmail.com",
//     "phoneNumber" :"09844355645",
//     "birthDate": new Date()
// }]
    
  

@Component({
  selector: 'app-edit-appointment-dialog',
  templateUrl: './edit-appointment-dialog.component.html',
  styleUrls: ['./edit-appointment-dialog.component.sass']
})
export class EditAppointmentDialogComponent implements OnInit {

  
  procedures: Procedure[] = [];
  selectedprocedure: Procedure[] = [];
  isSelectionChanged: boolean = false;

  // users: User[] = [];
  // selectedUser: User[]=[];

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : Appointment,
    public dialogRef: MatDialogRef<AppointmentsPageComponent>,
    private appointmentService : AppointmentService) {  
      this.procedures = SAMPLE_DATA_PROCEDURES;
      // this.users = SAMPLE_DATA_USERS;
    }

  form = new FormGroup({

    date: new FormControl(new Date(), Validators.min(30)),  //see in future
    disease: new FormControl("", [Validators.minLength(3),Validators.maxLength(255)])
  });

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onSaveForm(): void{
    this.data.date = this.form.value.date!;
    this.data.disease = this.form.value.disease!;
    this.data.procedures = this.selectedprocedure;
    // this.data.users = this.selectedUser;
    this.appointmentService.updateAppointment(this.data).subscribe(() => this.dialogRef.close(true));
}
    

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  // onMultiSelectSubmitProcedure(event : any) : void{ // add also users
  //   console.log(...event.data);
  //   this.selectedprocedure = [...event.data ] as Procedure[];
  //   this.isSelectionChanged = event.isChanged;
  // }

  
  // onMultiSelectSubmitDoctor(event : any) : void{ // add also users
  //   console.log(...event.data);
  //   this.selectedUser = [...event.data] as User[];
  //   this.isSelectionChanged = event.isChanged;
  // }

  isButtonEnabled(): boolean{
    return this.form.valid && (this.form.dirty || this.isSelectionChanged); 
  }
}
