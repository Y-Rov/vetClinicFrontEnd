import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentService} from "../../../services/commentService/comment.service";
import {MatDialog} from "@angular/material/dialog";
import {DateTimeService} from "../../../services/dateTimeService/date-time.service";

@Component({
  selector: 'app-display-comment',
  templateUrl: './display-comment.component.html',
  styleUrls: ['./display-comment.component.sass']
})
export class DisplayCommentComponent implements OnInit {
  @Output() deletedComment = new EventEmitter<{data: Comment, hasListChanged: boolean}>();

  @Input() comment?: Comment

  constructor(private commentService: CommentService,
              private matDialog: MatDialog,
              public dateService: DateTimeService) { }

  ngOnInit(): void {
  }

}
