import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
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

const SAMPLE_DATA_ANIMAL: Animal[] =  [
  {
    "id" :  1,
    "ownerId" :  1,
    "nickName" :  "Tom",
    "birthDate" :   new Date()
  },
  {
    "id" :  2,
    "ownerId" :  1,
    "nickName" :  "Jerry",
    "birthDate" :   new Date()
  }

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

  users: User[] = [];
  selectedUser: User[]=[];

  animals$: Animal[] = [];
  selectedAnimal: Animal= {} as Animal;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
  public dialogRef: MatDialogRef<AppointmentsPageComponent>,
  private appointmentService : AppointmentService,
  private procedureService : ProcedureService,
  private userService : UserService) {  

    this.procedureService.getAll().subscribe((data: Procedure[]) => this.procedures = data)
    this.userService.getAll().subscribe((data: User[]) => this.users = data)
    this.animals$=SAMPLE_DATA_ANIMAL;
  }

  form = new FormGroup({

    dateAndTime: new FormControl(new Date(), Validators.min(30)), 
    disease: new FormControl("", [Validators.minLength(3),Validators.maxLength(255)])
  });
  
  ngOnInit(): void {
  }

  onSaveForm(): void{
    if(!this.form.valid) {
      return;
    }
    if(!(this.form.dirty || this.isSelectionChanged)) {
      this.dialogRef.close(false);
    }  
    const finalData : Appointment = this.form.value as Appointment;
    finalData.procedures = this.selectedprocedure;
    finalData.users = this.selectedUser;
    finalData.animal = this.selectedAnimal;
    console.log("ACVFD");
    // finalData.dateAndTime = this
    console.log(finalData);
    this.appointmentService.addAppointment(finalData).subscribe(() => this.dialogRef.close(true));
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

  selectedAnimalForNew(event: MatSelectChange) {
    this.selectedAnimal = event.value;
    console.log(this.selectedAnimal);
    this.isSelectionChanged = true;

  }

  isButtonEnabled(): boolean{
    return this.form.valid && (this.form.dirty || this.isSelectionChanged); 
  }

}
