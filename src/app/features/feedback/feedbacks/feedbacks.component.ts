import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Feedback} from "../../../core/models/Feedback";
import {FeedbackService} from "../../../core/services/feedbackService/feedback.service";
import {MatDialog} from "@angular/material/dialog";
import {FeedbackAddComponent} from "../feedback-add/feedback-add.component";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass']
})
export class FeedbacksComponent implements OnInit {

  dataSource: MatTableDataSource<Feedback> =
    new MatTableDataSource<Feedback>();

  displayedColumns: string[] = [
    "email","serviceRate","priceRate","supportRate","suggestions","user","communicate"
  ];

  pageSizeOptions: { name: string; value: number }[] = [
    { name: '4', value: 4 },
    { name: '10', value: 10 },
    { name: '20', value: 20 }
  ];

  currentPageSize: number = this.pageSizeOptions[0].value;
  currentPageNumber: number = 1;
  filterValue: string | null = null;

  constructor(
    private feedbackService : FeedbackService,
    private matDialog : MatDialog) { }

  private updateFeedbacks(
    takeCount?: number,
    skipCount: number = 0,
    filterParam: string | null = null){
    this.feedbackService.getFeedbacks(skipCount, takeCount, filterParam)
      .subscribe(
        data => this.dataSource.data = data
      );
  }

  selectPageSizeOption(): void {
    this.updateFeedbacks(this.currentPageSize);
    this.currentPageNumber = 1;
  }

  onPrevPageClick(): void {
    this.currentPageNumber -= 1;
    this.updateFeedbacks(this.currentPageSize, this.currentPageSize * (this.currentPageNumber - 1));
  }

  onNextPageClick(): void {
    this.currentPageNumber += 1;
    this.updateFeedbacks(this.currentPageSize, this.currentPageSize * (this.currentPageNumber - 1));
  }

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.updateFeedbacks(1, this.currentPageSize, this.filterValue);
  }

  sendEmail(email : string){

  }

  ngOnInit(): void {
    this.updateFeedbacks(this.currentPageSize);
  }



}
