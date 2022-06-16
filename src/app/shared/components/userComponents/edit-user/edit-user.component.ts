import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/userService/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddressService } from 'src/app/core/services/addressService/address.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.sass']
})
export class EditUserComponent implements OnInit {
  subscription: Subscription | null = null;

  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    birthDate: new Date()
  };

  editUserForm = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'phoneNumber': new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
    ]),
    'birthDate': new FormControl(new Date())
  });

  constructor(
    private userService: UserService,
    private addressService: AddressService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
        this.subscription = this.activatedRoute.params.subscribe(params => this.user.id = +params['id']);
  }

  ngOnInit(): void {
    this.userService.getById(this.user.id!)
      .subscribe(user => {
        this.user = {...user};

        this.editUserForm.patchValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          phoneNumber: this.user.phoneNumber,
          birthDate: this.user.birthDate
        });
      });
  }

  updateUser(): void {
    this.user.firstName = this.editUserForm.value.firstName!;
    this.user.lastName = this.editUserForm.value.lastName!;
    this.user.phoneNumber = this.editUserForm.value.phoneNumber!;
    this.user.birthDate = new Date(this.editUserForm.value.birthDate!);

    this.userService.update(this.user).subscribe();
    this.router.navigate([`users`, this.user.id]);
  }

  goToPreviousPage(): void {
    this.userService.goToPreviousPage();
  }
}
