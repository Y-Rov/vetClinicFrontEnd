import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {PortfolioService} from "../../../services/portfolioService/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmDeletionDialogComponent} from "../confirm-deletion-dialog/confirm-deletion-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-user-portfolio-edit',
  templateUrl: './user-portfolio-edit.component.html',
  styleUrls: ['../user-base-edit.component.sass', './user-portfolio-edit.component.sass']
})
export class UserPortfolioEditComponent implements OnInit {

  userId: number;
  submitButtonText: string = "Add";
  deleteButtonVisibility: boolean = false;
  readonly descriptionMaxLength: number = 2048;

  description = new FormControl<string>('', [Validators.required, Validators.minLength(64),
    Validators.maxLength(this.descriptionMaxLength)]);

  constructor(
    public portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private confirmDeletionDialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getErrorMessage(): string {
    if (this.description.hasError('required')){
      return 'This field is required';
    }

    return this.description.hasError('minlength')
      ? 'Your portfolio is too short! Tell the world more about yourself ;)'
      : '';
  }

  ngOnInit(): void {
    this.getUserPortfolio();
  }

  getUserPortfolio() {
    this.portfolioService.getById(this.userId)
      .subscribe(portfolio => {
        if (portfolio !== undefined) {
          this.description.setValue(portfolio.description!);
          this.deleteButtonVisibility = true;
          this.submitButtonText = "Update";
        }
      });
  }

  updateUserPortfolio(): void {
    if (this.description.valid) {
      if (this.description.pristine) {
        this.snackBar.open(`There is nothing to update!`, 'Close', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        return;
      }

      if (this.deleteButtonVisibility) {
        this.portfolioService.update({id: this.userId, description: this.description.value})
          .subscribe(() => {
            this.showSnackBarWith('updated');
          });
      } else {
        this.portfolioService.create({id: this.userId, description: this.description.value})
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

  deletePortfolio(): void {
    let deleteDialog = this.confirmDeletionDialog.open(ConfirmDeletionDialogComponent, {
      data: "portfolio",
      autoFocus: "dialog",
      width: "17.25vw",
      height: "17.25vh"
    });

    deleteDialog.afterClosed()
      .subscribe((dialogResult) => {
        if (dialogResult) {
          this.portfolioService.deleteById(this.userId)
            .subscribe(() => {
              this.showSnackBarWith("deleted");
              this.description.reset();
              this.submitButtonText = "Add";
              this.deleteButtonVisibility = false;
            });
        }
      });
  }

  showSnackBarWith(performedOperation: string): void {
    this.snackBar.open(`Your portfolio was ${performedOperation} successfully!`, 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
