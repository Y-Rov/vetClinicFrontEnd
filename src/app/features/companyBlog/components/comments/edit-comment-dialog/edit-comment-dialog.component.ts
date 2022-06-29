import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DisplayCommentComponent} from "../display-comment/display-comment.component";
import {CommentService} from "../../../services/commentService/comment.service";
import {Comment} from "../../../../../core/models/Comment";

@Component({
  selector: 'app-edit-comment-dialog',
  templateUrl: './edit-comment-dialog.component.html',
  styleUrls: ['./edit-comment-dialog.component.sass']
})
export class EditCommentDialogComponent implements OnInit {

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<DisplayCommentComponent>,
              @Inject(MAT_DIALOG_DATA) public data : Comment,
              private commentService : CommentService) { }

  form = new FormGroup({
    content: new FormControl("", Validators.minLength(1)),
  });

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSave(): void{
    const finalData : Comment = this.form.value as Comment;
    finalData.id = this.data.id;
    this.commentService
      .updateComment(finalData)
      .subscribe(() => this.dialogRef.close(true));
  }
}
