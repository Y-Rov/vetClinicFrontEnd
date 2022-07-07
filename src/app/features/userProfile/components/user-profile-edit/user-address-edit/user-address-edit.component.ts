import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import { AddressService } from "../../../services/addressService/address.service";
import { ActivatedRoute } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeletionDialogComponent } from "../confirm-deletion-dialog/confirm-deletion-dialog.component";

@Component({
  selector: 'app-user-address-edit',
  templateUrl: './user-address-edit.component.html',
  styleUrls: ['../user-base-edit.component.sass']
})
export class UserAddressEditComponent implements OnInit {

  userId: number;
  deleteButtonVisibility: boolean = false;
  submitButtonText: string = "Add";
  readonly cityAndStreetMaxLength: number = 85;
  readonly houseMaxLength: number = 15;
  readonly apartmentNumberMaxLength = 5;

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
    private activatedRoute: ActivatedRoute,
    private confirmDeletionDialog: MatDialog,
    private snackBar: MatSnackBar
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

  ngOnInit(): void {
    this.getUserAddress();
  }

  getUserAddress(): void {
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
          this.deleteButtonVisibility = true;
          this.submitButtonText = "Update";
        }
      });
  }

  updateUserAddress(): void {
    if (this.editUserAddressForm.valid) {
      if (this.editUserAddressForm.pristine) {
        this.snackBar.open(`There is nothing to update!`, 'Close', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        return;
      }

      if (this.deleteButtonVisibility) {
        this.addressService.update({id: this.userId, ...this.editUserAddressForm.value})
          .subscribe(() => {
            this.showSnackBarWith('updated');
          });
      } else {
        this.addressService.create({id: this.userId, ...this.editUserAddressForm.value})
          .subscribe(() => {
            this.showSnackBarWith('created');
            this.submitButtonText = "Update";
            this.deleteButtonVisibility = true;
          });
      }
    } else {
      this.snackBar.open(`The form has been filled out incorrectly!`, 'Close', {
        duration: 4000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
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
          this.addressService.deleteById(this.userId)
            .subscribe(() => {
              this.showSnackBarWith("deleted");
              formReference.resetForm();
              this.submitButtonText = "Add";
              this.deleteButtonVisibility = false;
            });
        }
      });
  }

  showSnackBarWith(performedOperation: string): void {
    this.snackBar.open(`Your address was ${performedOperation} successfully!`, 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
