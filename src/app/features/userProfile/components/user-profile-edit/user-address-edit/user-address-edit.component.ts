import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from "@angular/forms";
import { AddressService } from "../../../services/addressService/address.service";
import { ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeletionDialogComponent } from "../confirm-deletion-dialog/confirm-deletion-dialog.component";
import { Address } from "../../../../../core/models/Address";
import { SnackbarProviderService } from "../../../../../core/services/snackbarService/snackbar-provider.service";

@Component({
  selector: 'app-user-address-edit',
  templateUrl: './user-address-edit.component.html',
  styleUrls: ['../user-base-edit.component.sass']
})
export class UserAddressEditComponent implements OnInit {

  userId: number;
  userAddress: Address | null = null;
  deleteButtonVisibility: boolean = false;
  readonly cityAndStreetMaxLength: number = 85;
  readonly houseMaxLength: number = 15;
  readonly apartmentNumberMaxLength: number = 5;

  editUserAddressForm = new FormGroup({
    'city': new FormControl<string>('', [Validators.required, Validators.maxLength(this.cityAndStreetMaxLength)]),
    'street': new FormControl<string>('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.cityAndStreetMaxLength)]),
    'house': new FormControl<string>('', [Validators.required, Validators.maxLength(this.houseMaxLength),
      Validators.pattern(/^\d+(?: ?(?:[a-z]|[/-] ?\d+[a-z]?))?$/i)]),
    'apartmentNumber': new FormControl<number | null>(null, [Validators.min(1), Validators.max(65535),
      Validators.pattern(/^[+]?\d{1,5}$/)]),
    'zipCode': new FormControl<string | null>(null, Validators.pattern(/^\d{5}(?:[-\s]\d{4})?$/))
  });

  constructor(
    public addressService: AddressService,
    private snackbarService: SnackbarProviderService,
    private activatedRoute: ActivatedRoute,
    private confirmDeletionDialog: MatDialog
  ) {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getErrorMessage(field: string): string {
    if (this.editUserAddressForm.get(field)?.hasError('required')) {
      return 'This field is required';
    }
    if (this.editUserAddressForm.get(field)?.hasError('minlength')) {
      return `The entered value is too short`;
    }

    return `The entered value does not match the ${field} pattern`;
  }

  ignoreNotNumberSymbols(event: KeyboardEvent): boolean {
    return ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'].includes(event.code)
      ? true
      : !isNaN(Number(event.key)) && event.code !== 'Space';
  }

  ngOnInit(): void {
    this.getUserAddress();
  }

  getUserAddress(): void {
    this.addressService.getById(this.userId)
      .subscribe(address => {
        if (address !== undefined) {
          this.userAddress = address;
          this.userAddress.id = this.userId;
          this.editUserAddressForm.patchValue({
            city: address.city,
            street: address.street,
            house: address.house,
            apartmentNumber: address.apartmentNumber,
            zipCode: address.zipCode
          });
          this.deleteButtonVisibility = true;
        }
      });
  }

  // Returns false if the user has changed the value in the form
  isFormAndCurrentAddressSame(data: any): boolean {
    let equal: boolean = true;
    Object.keys(data).forEach(key => {
      if (key !== 'id') {
        equal = (equal && data[key] == this.editUserAddressForm.get(`${key}`)?.value);
      }
    })
    return equal;
  }

  updateCurrentAddress(address: any): void {
    Object.keys(address).forEach(key => {
      if (key !== 'id') {
        address[key] = this.editUserAddressForm.get(`${key}`)?.value;
      }
    })
  }

  updateUserAddress(): void {
    if (this.userAddress && this.isFormAndCurrentAddressSame(this.userAddress)) {
      this.snackbarService.openWithMessage('There is nothing to update!');
      return;
    }

    this.updateCurrentAddress(this.userAddress);
    if (this.deleteButtonVisibility) {
      this.addressService.update(this.userAddress!)
        .subscribe(() => {
          this.snackbarService.openWithMessage('Your address was updated successfully!');
        });
    } else {
      this.addressService.create(this.userAddress!)
        .subscribe(() => {
          this.snackbarService.openWithMessage('Your address was created successfully!');
          this.deleteButtonVisibility = true;
        });
    }
  }

  deleteAddress(formReference: FormGroupDirective): void {
    let deleteDialog = this.confirmDeletionDialog.open(ConfirmDeletionDialogComponent, {
      data: "address",
      autoFocus: "dialog",
      width: "17.25vw",
      height: "17.25vh"
    });

    deleteDialog.afterClosed()
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.addressService.deleteById(this.userAddress!.id!)
            .subscribe(() => {
              this.snackbarService.openWithMessage("Your address was deleted successfully!");
              formReference.resetForm();
              this.deleteButtonVisibility = false;
              this.userAddress = null;
            });
        }
      });
  }
}
