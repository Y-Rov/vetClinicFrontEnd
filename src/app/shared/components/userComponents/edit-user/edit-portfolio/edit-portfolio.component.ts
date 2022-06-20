import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PortfolioService} from "src/app/core/services/portfolioService/portfolio.service";
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['../edit-user.component.sass', "./edit-portfolio.component.sass"]
})
export class EditPortfolioComponent implements OnInit {

  userId: number;
  description = new FormControl<string>('', [Validators.required, Validators.minLength(64)]);
  isPortfolioGetRequestSuccessful: boolean = false;

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
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
          this.isPortfolioGetRequestSuccessful = true;
        }
      });
  }

  updateUserPortfolio(): void {
    if (this.isPortfolioGetRequestSuccessful && this.description.dirty) {
      this.portfolioService.update({id: this.userId, description: this.description.value})
        .subscribe(() => {
          this.showSnackBar('updated');
        });
    } else {
      if (this.description.valid) {
        this.portfolioService.create({id: this.userId, description: this.description.value})
          .subscribe(() => {
            this.showSnackBar('created');
          });
      }
    }
  }

  showSnackBar(verb: string) {
    this.snackBar.open(`Your portfolio was ${verb} successfully!`, 'Close', {
      duration: 4000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  goToPreviousPage(): void {
    this.portfolioService.goToPreviousPage();
  }
}
