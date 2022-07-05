import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { RegisterFormModel } from 'src/app/core/models/operational-models/form-models/RegisterFormModel';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { CustomValidators } from 'src/app/helpers/custom-validators/custom-validators';
import { HeaderComponent } from 'src/app/layout/header/header.component';


@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  registrationFailureMessage: string | undefined;
  minDate: Date;
  maxDate: Date;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
    private authService : AuthService,
    private router : Router) 
  {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 120, 0, 0);
    this.maxDate = new Date(currentYear - 18, 0, 0)
  }

  form = new FormGroup({
    firstName: new FormControl("", [Validators.minLength(2), Validators.required]),
    lastName: new FormControl("", [Validators.minLength(2), Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    phoneNumber: new FormControl("", [Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'), Validators.required]),
    birthDate: new FormControl(new Date(), [Validators.required]),
    profilePicture: new FormControl(),
    password: new FormControl("", [Validators.minLength(6), Validators.required]),
    confirmPassword: new FormControl("", [Validators.minLength(6), Validators.required])
  },
  CustomValidators.MatchValidator('password', 'confirmPassword'));

  hide = true;

  getPasswordMatchError() {
    return (
      this.form.getError('mismatch') &&
      this.form.get('confirmPassword')?.touched
    );
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    const model : RegisterFormModel = this.form.value as RegisterFormModel;
    this.authService.register(model)
      .pipe(catchError(err => {
        this.registrationFailureMessage = err
        return throwError(err)
      }))
      .subscribe(user => 
        this.authService.login(user.email!, model.password!)
        .subscribe(_ => this.router.navigate(['/procedures'])));
  }

}
