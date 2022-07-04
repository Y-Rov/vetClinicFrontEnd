// import { Component, Inject, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Animal } from 'src/app/core/models/Animal';
// import { Appointment } from 'src/app/core/models/Appointment';
// import { Procedure } from 'src/app/core/models/Procedure';
// import { User } from 'src/app/core/models/User';
// import { AnimalService } from 'src/app/core/services/animalService/animal.service';
// import { AppointmentService } from 'src/app/core/services/appointmentService/appointment.service';
// import { ProcedureService } from 'src/app/core/services/procedureService/procedure.service';
// import { UserService } from 'src/app/features/userDashboard/services/userService/user.service';
// import { AppointmentsPageComponent } from '../appointments-page/appointments-page.component';


// @Component({
//   selector: 'app-edit-appointment-dialog',
//   templateUrl: './edit-appointment-dialog.component.html',
//   styleUrls: ['./edit-appointment-dialog.component.sass']
// })
// export class EditAppointmentDialogComponent implements OnInit {

//   procedures: Procedure[] = [];
//   selectedprocedure: Procedure[] = [];
//   isSelectionChanged: boolean = false;

//   users: User[] = [];
//   selectedUser: User[]=[];

//   animals: Animal[] = [];
//   public selectedAnimal: Animal = {};

//   constructor(
//     @Inject(FormBuilder) private formBuilder: FormBuilder,
//     @Inject(MAT_DIALOG_DATA) public data : Appointment,
//     public dialogRef: MatDialogRef<AppointmentsPageComponent>,
//     private appointmentService : AppointmentService,
//     private procedureService : ProcedureService,
//     private userService : UserService,
//     private animalService : AnimalService
//     ) {  
//       this.procedureService.getAll().subscribe((data: Procedure[]) => this.procedures = data)
//       this.userService.getAll().subscribe((data: User[]) => this.users = data)
//       this.animalService.getAll().subscribe((data: Animal[]) => this.animals = data);
//     }

//   form = new FormGroup({

//     date: new FormControl(new Date(), Validators.min(30)), 
//     disease: new FormControl("", [Validators.minLength(3),Validators.maxLength(255)])
    
//   });

//   ngOnInit(): void {
//     this.form.patchValue(this.data);
//     this.selectedprocedure = this.data.procedures!;
//     this.selectedUser = this.data.users!;
//     this.selectedAnimal = this.data.animal!;
//   }

//   onSaveForm(): void{
//     if(!this.form.valid) {
//       return;
//     }
//     if(!(this.form.dirty || this.isSelectionChanged)) {
//       this.dialogRef.close(false);
//     }
//     this.data.dateAndTime = new Date(this.form.value.date!);
//     this.data.disease = this.form.value.disease!;
//     this.data.procedures = this.selectedprocedure;
    
//     this.data.users = this.selectedUser;
//     this.data.animal= this.selectedAnimal;
//     console.log(this.data);
//     this.appointmentService.updateAppointment(this.data).subscribe(() => this.dialogRef.close(true));
// }
    

//   onNoClick(): void {
//     this.dialogRef.close(false);
//   }

//   onMultiSelectSubmitProcedure(event : any) : void{ 
//     console.log(...event.data);
//     this.selectedprocedure = [...event.data ] as Procedure[];
//     this.isSelectionChanged = event.isChanged;
//   }

  
//   onMultiSelectSubmitDoctor(event : any) : void{ 
//     console.log(...event.data);
//     this.selectedUser = [...event.data] as User[];
//     this.isSelectionChanged = event.isChanged;
//   }

//   selectedAnimalForEdit(event: any) {
//     this.selectedAnimal = event.value;
//     this.isSelectionChanged = event.isChanged;
//     console.log(event);
//     console.log(this.selectedAnimal);
//   }

//   isSelectedAnimal(animal: Animal): boolean{
//     return animal.nickName === this.selectedAnimal.nickName;
//   }

//   isButtonEnabled(): boolean{
//     return this.form.valid && (this.form.dirty || this.isSelectionChanged); 
//   }
// }
