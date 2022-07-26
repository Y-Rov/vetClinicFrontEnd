import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LoginFormModel } from 'src/app/core/models/operational-models/form-models/LoginFormModel'
import { TokensResponse } from 'src/app/core/models/operational-models/TokensResponse';
import { AuthService } from 'src/app/core/services/authService/auth.service';
import { UserService } from 'src/app/features/userDashboard/services/userService/user.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public isLoginSucceeded:boolean|undefined;

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
    private authService : AuthService,
    private userService: UserService,
    private router: Router) 
    { }

  form = new FormGroup({
    username: new FormControl("", Validators.minLength(4)),
    password: new FormControl("", Validators.minLength(6))  
  });
  hide = true;

  ngOnInit(): void {
  }

  onSubmit(): void{
    const model : LoginFormModel = this.form.value as LoginFormModel;
    this.authService.login(model.username, model.password)
      .pipe(catchError(err => {
        this.handleLoginFail();
        return throwError(err)
      }))
      .subscribe(response => this.handleLoginSuccess(response));
  }

  private handleLoginFail(){
    this.isLoginSucceeded = false;
  }

  private handleLoginSuccess(tokenResponse: TokensResponse){
    this.router.navigate(['/procedures']);
  }
}
