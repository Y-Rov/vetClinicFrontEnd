import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Feedback} from "../../../core/models/Feedback";
import {FeedbackService} from "./services/feedback.service";
import {MatDialog} from "@angular/material/dialog";
import {FeedbackAddComponent} from "../feedback-add/feedback-add.component";
import {FeedbackParameters} from "../../../core/models/operational-models/QueryParameters/FeedbackParameters";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass']
})
export class FeedbacksComponent implements OnInit {

  dataSource: MatTableDataSource<Feedback> =
    new MatTableDataSource<Feedback>();

  displayedColumns: string[] = [
    "email","serviceRate","priceRate","supportRate","suggestions","user"
  ];

  pageSizeOptions: { name: string; value: number }[] = [
    { name: '4', value: 4 },
    { name: '10', value: 10 },
    { name: '20', value: 20 }
  ];

  pageInfo: FeedbackParameters | null = null;
  currentPageSize: number = this.pageSizeOptions[0].value;
  currentPageNumber: number = 1;
  filterValue: string | null = null;

  constructor(
    private feedbackService : FeedbackService) { }

  private updateFeedbacks(
    pageNumber: number = 1,
    pageSize: number = 4,
    filterParam: string | null = null){
    this.feedbackService.getFeedbacks(pageNumber, pageSize, filterParam)
      .subscribe(
        data => {
          this.dataSource.data = data.entities;
          this.updatePageInfo(data);
        }
      );
  }

  updatePageInfo(pageInformation : FeedbackParameters){
    this.pageInfo = pageInformation;
  }

  // Change signatures!!!

  selectPageSizeOption(): void {
    this.updateFeedbacks(this.currentPageNumber,this.currentPageSize,this.filterValue);
    this.currentPageNumber = 1;
  }

  onPrevPageClick(): void {
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

  ngOnInit(): void {
    this.updateFeedbacks(this.currentPageSize);
  }

}
