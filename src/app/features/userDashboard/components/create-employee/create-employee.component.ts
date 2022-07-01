import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { UsersComponent } from "../users/users.component";
import { UserService } from "../../services/userService/user.service";
import { RegisterEmployeeModel } from "../../../../core/models/RegisterEmployeeModel";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {
  rolesList: string[] = ['Doctor', 'Accountant', 'Admin'];
  isSelectionChanged: boolean = false;
  profilePicture: string = '';

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

  async onCreateEmployee() {
    const employee = this.employeeForm.value as RegisterEmployeeModel;

    if (this.profilePicture.length == 0) {
      const response: Response = await fetch('/assets/images/default_profile_pic.jpg');
      const data: Blob = await response.blob();
      const metadata = {type: 'image/jpeg'};
      const file = new File([data], 'default_profile_pic.jpg', metadata);
      
      this.convertFileToBase64(file);
    }
    
    employee.profilePicture = this.profilePicture;
    this.userService.registerEmployee(employee).subscribe(() => this.dialogRef.close(true));
  }

  private convertFileToBase64(file: File): void {
    const reader = new FileReader();

    reader.onload = (e: any) => {
      const base64 = e.target.result.split('base64,')[1];
      this.profilePicture = base64;
    };

    reader.readAsDataURL(file);
  }

  onDiscard(): void {
    this.dialogRef.close(false);
  }

  handleFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    this.convertFileToBase64(file);
  }

  isButtonEnabled(): boolean{
    return this.employeeForm.valid && (this.employeeForm.dirty || this.isSelectionChanged);
  }
}
