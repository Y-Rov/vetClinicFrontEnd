import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'any'
})
export class SnackbarProviderService {

  constructor(private snackbar: MatSnackBar) { }

  openWithMessage(message: string): void {
    this.snackbar.open(`${message}`, 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
