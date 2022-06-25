import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddressService} from "../../../services/addressService/address.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-address-edit',
  templateUrl: './user-address-edit.component.html',
  styleUrls: ['../user-base-edit.component.sass']
})
export class UserAddressEditComponent implements OnInit {

  userId: number;
  isAddressGetRequestSuccessful: boolean = false;

  editUserAddressForm = new FormGroup({
    'city': new FormControl<string>('', Validators.required),
    'street': new FormControl<string>('', Validators.required),
    'house': new FormControl<string>('', Validators.required),
    'apartmentNumber': new FormControl<number | null>(null,  Validators.min(1)),
    'zipCode': new FormControl<string | null>(null, Validators.pattern('^\\d{5}(?:[-\\s]\\d{4})?$'))
  });

  constructor(
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getUserAddress();
  }

  getUserAddress() {
    this.addressService.getById(this.userId)
      .subscribe(address => {
        if (address !== undefined) {
          this.editUserAddressForm.patchValue({
            city: address.city,
            street: address.street,
            house: address.house,
            apartmentNumber: address.apartmentNumber,
            zipCode: address.zipCode
          });
          this.isAddressGetRequestSuccessful = true;
        }
      });
  }

  updateUserAddress(): void {
    if (this.isAddressGetRequestSuccessful && this.editUserAddressForm.dirty) {
      this.addressService.update({id: this.userId, ...this.editUserAddressForm.value})
        .subscribe(() => {
          this.showSnackBar('updated');
        });
    } else {
      if (this.editUserAddressForm.valid) {
        this.addressService.create({id: this.userId, ...this.editUserAddressForm.value})
          .subscribe(() => {
            this.showSnackBar('created');
          });
      }
    }
  }

  showSnackBar(verb: string) {
    this.snackBar.open(`Your address was ${verb} successfully!`, 'Close', {
      duration: 4000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  goToPreviousPage(): void {
    this.addressService.goToPreviousPage();
  }
}
