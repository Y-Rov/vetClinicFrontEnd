import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AddressService } from "src/app/core/services/addressService/address.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['../edit-user.component.sass']
})
export class EditAddressComponent implements OnInit {

  userId: number;
  isAddressGetRequestSuccessful?: boolean;

  editUserAddressForm = new FormGroup({
    'city': new FormControl<string>('', Validators.required),
    'street': new FormControl<string>('', Validators.required),
    'house': new FormControl<string>('', Validators.required),
    'apartmentNumber': new FormControl<number | null>(null,  Validators.min(1)),
    'zipCode': new FormControl<string | null>(null, Validators.pattern('^\\d{5}(?:[-\\s]\\d{4})?$'))
  });

  constructor(
    private addressService: AddressService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getUserAddress();
  }

  getUserAddress() {
    this.addressService.getAddress(this.userId)
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
        else {
          this.isAddressGetRequestSuccessful = false;
        }
      });
  }

  updateUserAddress(): void {
    if (this.isAddressGetRequestSuccessful) {
      this.addressService.updateAddress({userId: this.userId, ...this.editUserAddressForm.value})
        .subscribe(() => this.addressService.goToPreviousPage());
    } else {
      if (this.editUserAddressForm.valid) {
        this.addressService.addAddress({userId: this.userId, ...this.editUserAddressForm.value})
          .subscribe(() => this.addressService.goToPreviousPage());
      }
    }
  }

  goToPreviousPage(): void {
    this.addressService.goToPreviousPage();
  }
}
