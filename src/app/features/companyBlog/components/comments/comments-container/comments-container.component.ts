import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from "../../../services/commentService/comment.service";
import {Comment} from "../../../../../core/models/Comment";
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../../core/services/authService/auth.service";

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.sass']
})
export class CommentsContainerComponent implements OnInit {
  @Input() currentArticleId?: number

  form = new FormGroup({
    content: new FormControl(""),
  })

  comments: Comment[] = [];

  constructor(private commentService: CommentService,
              public authService: AuthService) { }

  updateList(): void{
    this.commentService
      .getByArticleId(this.currentArticleId!)
      .subscribe(data =>{
        this.comments = data.reverse();
      })
  }

  ngOnInit(): void {
  }

  onDeleteComment(event: any): void{
    this.comments = this.comments.filter(c => c.id !== event.data.id);
  }

  ngOnChanges(): void{
    this.updateList();
  }

  onPostComment(event: any): void{
    event.stopPropagation();
    let finalData: Comment = this.form.value as Comment;
    finalData.articleId = this.currentArticleId!;
    this.commentService
      .postComment(finalData)
      .subscribe(() => {
        this.form.value.content = '';
        this.updateList();
    })
  }
}
