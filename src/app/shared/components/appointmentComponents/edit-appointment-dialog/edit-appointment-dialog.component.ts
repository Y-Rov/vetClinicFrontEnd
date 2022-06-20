import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Animal } from 'src/app/core/models/Animal';
import { Appointment } from 'src/app/core/models/Appointment';
import { Procedure } from 'src/app/core/models/Procedure';
import { User } from 'src/app/core/models/User';
import { AppointmentService } from 'src/app/core/services/appointmentService/appointment.service';
import { ProcedureService } from 'src/app/core/services/procedureService/procedure.service';
import { UserService } from 'src/app/core/services/userService/user.service';
import { AppointmentsPageComponent } from '../appointments-page/appointments-page.component';

// const SAMPLE_DATA_PROCEDURES: Procedure[] =  [
//   {
//     "id" :  1,
//     "name" : "first procedure",
//     "description" : "operation",
//     "durationInMinutes" : 15,
//     "cost" : 100,

//     specializations : [{
//       "id" :  1,
//       "name" : "first spec" 
//     }]},

//   {
//       "id" :  2,
//       "name" : "second procedure",
//       "description" : "operation",
//       "durationInMinutes" : 10,
//       "cost" : 300,
      
//       specializations : [{
//         "id" :  1,
//         "name" : "first spec"
//     }]}
//   ]
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
 

// const SAMPLE_DATA_ANIMAL: Animal[] =  [
//   {
//     "id" :  1,
//     "ownerId" :  1,
//     "nickName" :  "Tom",
//     "birthDate" :   new Date()
//   },
//   {
//     "id" :  2,
//     "ownerId" :  1,
//     "nickName" :  "Jerry",
//     "birthDate" :   new Date()
//   }

// ]


@Component({
  selector: 'app-edit-appointment-dialog',
  templateUrl: './edit-appointment-dialog.component.html',
  styleUrls: ['./edit-appointment-dialog.component.sass']
})
export class EditAppointmentDialogComponent implements OnInit {

  procedures: Procedure[] = [];
  selectedprocedure: Procedure[] = [];
  isSelectionChanged: boolean = false;

  users: User[] = [];
  selectedUser: User[]=[];

  animals$: Animal[] = [];
  selectedAnimal: Animal= {} as Animal;

  constructor(
    @Inject(FormBuilder) private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data : Appointment,
    public dialogRef: MatDialogRef<AppointmentsPageComponent>,
    private appointmentService : AppointmentService,
    private procedureService : ProcedureService,
    private userService : UserService) {  
      // this.procedureService.getAll().subscribe((data: []) => this.procedures = data)
      // userService.getAll().subscribe((data: []) => this.users = data)
    }

  form = new FormGroup({

    date: new FormControl(new Date(), Validators.min(30)), 
    disease: new FormControl("", [Validators.minLength(3),Validators.maxLength(255)])
  });

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onSaveForm(): void{
    this.data.dateAndTime = new Date(this.form.value.date!);
    this.data.disease = this.form.value.disease!;
    this.data.procedures = this.selectedprocedure;
    
    this.data.users = this.selectedUser;
    this.data.animal= this.selectedAnimal;
    // this.appointmentService.updateAppointment(this.data).subscribe(() => this.dialogRef.close(true));
}
    

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onMultiSelectSubmitProcedure(event : any) : void{ 
    console.log(...event.data);
    this.selectedprocedure = [...event.data ] as Procedure[];
    this.isSelectionChanged = event.isChanged;
  }

  
  onMultiSelectSubmitDoctor(event : any) : void{ 
    console.log(...event.data);
    this.selectedUser = [...event.data] as User[];
    this.isSelectionChanged = event.isChanged;
  }

  selectedAnimalForEdit(event: any) {
    this.selectedAnimal = event.data as Animal;
    this.isSelectionChanged = event.isChanged;
  }

  isButtonEnabled(): boolean{
    return this.form.valid && (this.form.dirty || this.isSelectionChanged); 
  }
}
