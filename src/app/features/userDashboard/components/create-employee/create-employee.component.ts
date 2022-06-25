import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {UsersComponent} from "../users/users.component";
import {UserService} from "../../services/userService/user.service";
import {RegisterEmployeeModel} from "../../../../core/models/RegisterEmployeeModel";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {
  rolesList: string[] = ['Doctor', 'Accountant', 'Admin'];
  isSelectionChanged: boolean = false;

  employeeForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
    ]),
    birthDate: new FormControl(new Date(''), Validators.required),
    role: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  constructor(
    public dialogRef: MatDialogRef<UsersComponent>,
    private userService: UserService) { }

  ngOnInit(): void { }

  onCreateEmployee(): void {
    const employee = this.employeeForm.value as RegisterEmployeeModel;
    this.userService.registerEmployee(employee).subscribe(() => this.dialogRef.close(true));
  }

  onDiscard(): void {
    this.dialogRef.close(false);
  }

  isButtonEnabled(): boolean{
    return this.employeeForm.valid && (this.employeeForm.dirty || this.isSelectionChanged);
  }
}
