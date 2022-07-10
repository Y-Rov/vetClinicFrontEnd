import { Component, Inject, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Animal } from 'src/app/core/models/Animal';
import { Appointment } from 'src/app/core/models/Appointment';
import { Procedure } from 'src/app/core/models/Procedure';
import { User } from 'src/app/core/models/User';
import { AnimalService } from 'src/app/features/animal/animalService/animal.service';
import { ProcedureService } from 'src/app/features/procedures/services/procedureService/procedure.service';
import { UserService } from 'src/app/features/userDashboard/services/userService/user.service';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentsPageComponent } from '../appointments-page/appointments-page.component';
import {AuthService} from "../../../../core/services/authService/auth.service";

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

  userId: number;
  animals: Animal[] = [];
  selectedAnimal: Animal= {} as Animal;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
  public dialogRef: MatDialogRef<AppointmentsPageComponent>,

  private authService : AuthService,

  private appointmentService : AppointmentService,
  private procedureService : ProcedureService,
  private userService : UserService,
  private animalService : AnimalService) {
    this.userId = authService.getUserId();
    this.procedureService.getAllPaged(1, 2000032)
      .subscribe(data => { this.procedures = data.entities; });
    this.userService.getDoctors().subscribe((data: User[]) => this.users = data)
    this.animalService.getAllAnimals(this.userId).subscribe((data: Animal[]) => this.animals = data);
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
