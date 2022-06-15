import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/User';
import { UserService } from 'src/app/core/services/userService/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/core/models/Address';
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

  userAddress: Address = {
    userId: 0,
    city: '',
    street: '',
    house: '',
    apartmentNumber: null,
    zipCode: null
  };

  editUserForm = new FormGroup({
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'phoneNumber': new FormControl('', [
      Validators.required, 
      Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')
    ]),
    'birthDate': new FormControl(new Date()),
    'city': new FormControl('', Validators.required),
    'street': new FormControl('', Validators.required),
    'house': new FormControl('', Validators.required),
    'apartmentNumber': new FormControl('', Validators.min(1)),
    'zipCode': new FormControl('', Validators.pattern('^\\d{5}(?:[-\\s]\\d{4})?$'))
  });

  constructor(
    private userService: UserService,
    private addressService: AddressService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
        this.subscription = this.activatedRoute.params.subscribe(params => this.user.id = +params['id']);
  }

  ngOnInit(): void {
    this.userService.getUserById(this.user.id)
      .subscribe(user => {
        this.user = {...user};
        
        this.editUserForm.patchValue({
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          phoneNumber: this.user.phoneNumber,
          birthDate: this.user.birthDate
        });
      });

    this.getUserAddress();
  }

  getUserAddress() {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.addressService.getAddress(id)
      .subscribe(address => {
        this.userAddress = address;
        this.editUserForm.patchValue({
          city: this.userAddress.city,
          street: this.userAddress.street,
          house: this.userAddress.house,
          apartmentNumber: this.userAddress.apartmentNumber?.toString(),
          zipCode: this.userAddress.zipCode?.toString()
        });
      });
  }

  updateUser(): void {
    this.user.firstName = this.editUserForm.value.firstName!;
    this.user.lastName = this.editUserForm.value.lastName!;
    this.user.phoneNumber = this.editUserForm.value.phoneNumber!;
    this.user.birthDate = new Date(this.editUserForm.value.birthDate!);

    this.userService.updateUser(this.user).subscribe();
    this.router.navigate([`users`, this.user.id]);
  }

  updateAddress(): void {
    this.addressService.updateAddress(this.userAddress)
      .subscribe(() => this.addressService.goToPreviousPage());
  }

  goToPreviousPage(): void {
    this.userService.goToPreviousPage();
  }
}
