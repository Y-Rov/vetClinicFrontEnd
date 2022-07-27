import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {PortfolioService} from "../../../services/portfolioService/portfolio.service";
import {ActivatedRoute} from "@angular/router";
import {ConfirmDeletionDialogComponent} from "../confirm-deletion-dialog/confirm-deletion-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {SnackbarProviderService} from "../../../../../core/services/snackbarService/snackbar-provider.service";
import {Portfolio} from "../../../../../core/models/Portfolio";

@Component({
  selector: 'app-user-portfolio-edit',
  templateUrl: './user-portfolio-edit.component.html',
  styleUrls: ['../user-base-edit.component.sass', './user-portfolio-edit.component.sass']
})
export class UserPortfolioEditComponent implements OnInit {

  userId: number;
  userPortfolio: Portfolio | null = null;
  deleteButtonVisibility: boolean = false;
  readonly descriptionMaxLength: number = 2048;

  description = new FormControl<string>('', [Validators.required, Validators.minLength(64),
    Validators.maxLength(this.descriptionMaxLength)]);

  constructor(
    public portfolioService: PortfolioService,
    private snackbarService: SnackbarProviderService,
    private activatedRoute: ActivatedRoute,
    private confirmDeletionDialog: MatDialog
  ) {
    this.userId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.getUserPortfolio();
  }

  getUserPortfolio() {
    this.portfolioService.getById(this.userId)
      .subscribe(portfolio => {
        if (portfolio !== undefined) {
          this.description.setValue(portfolio.description!);
          this.userPortfolio = { ... portfolio };
          this.userPortfolio.id = this.userId;
          this.deleteButtonVisibility = true;
        }
      });
  }

  updateUserPortfolio(): void {
    if (this.userPortfolio && this.userPortfolio.description === this.description.value) {
      this.snackbarService.openWithMessage('There is nothing to update!');
      return;
    }

    if (this.deleteButtonVisibility) {
      this.userPortfolio!.description = this.description.value;
      this.portfolioService.update({id: this.userId, description: this.description.value})
        .subscribe(() => {
          this.snackbarService.openWithMessage('Your portfolio was updated successfully!');
        });
    } else {
      this.userPortfolio = new Portfolio({ id: this.userId, description: this.description.value });
        this.portfolioService.create(this.userPortfolio)
          .subscribe(() => {
            this.snackbarService.openWithMessage('Your portfolio was created successfully!');
            this.deleteButtonVisibility = true;
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
              this.snackbarService.openWithMessage('Your portfolio was deleted successfully!');
              this.description.reset();
              this.deleteButtonVisibility = false;
            });
        }
      });
  }
}
