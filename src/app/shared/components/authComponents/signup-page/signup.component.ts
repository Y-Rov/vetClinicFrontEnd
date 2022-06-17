import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SignUpFormModel } from 'src/app/core/models/operational-models/form-models/SignupFormModel';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { HeaderComponent } from 'src/app/layout/header/header.component';


@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
    private authService : AuthService) 
    { }

  form = new FormGroup({
    firstName: new FormControl("", Validators.minLength(2)),
    lastName: new FormControl("", Validators.minLength(2)),
    email: new FormControl("", Validators.email),
    phoneNumber: new FormControl("", Validators.pattern('[- +()0-9]+')),
    birthDate: new FormControl(),
    password: new FormControl("", Validators.minLength(6))  
  });
  hide = true;

  ngOnInit(): void {
  }

  onSubmit(): void{
    
  }

}
