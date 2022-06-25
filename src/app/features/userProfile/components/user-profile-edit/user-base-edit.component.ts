import { Component, OnInit } from '@angular/core';
import {User} from "../../../../core/models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../userDashboard/services/userService/user.service";
import {AuthService} from "../../../../core/services/authService/auth.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-base-edit.component.html',
  styleUrls: ['./user-base-edit.component.sass']
})
export class UserBaseEditComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: new Date(),
    role: ''
  };

  editUserForm = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'phoneNumber': new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
    ]),
    'birthDate': new FormControl(new Date(''))
  });

  constructor(
    private userService: UserService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute) {
    this.user.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.userService.getById(this.user.id!).subscribe(user => {
      this.user = {...user};

      this.editUserForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        phoneNumber: this.user.phoneNumber,
        birthDate: this.user.birthDate
      });
    });
  }

  onUpdateUser(): void {
    this.user.firstName = this.editUserForm.value.firstName!;
    this.user.lastName = this.editUserForm.value.lastName!;
    this.user.phoneNumber = this.editUserForm.value.phoneNumber!;
    this.user.birthDate = this.editUserForm.value.birthDate!;

    this.userService.update(this.user).subscribe();
    this.goToPreviousPage();
  }

  goToPreviousPage(): void {
    this.userService.goToPreviousPage();
  }
}
