import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Article} from "../../../../../core/models/Article";
import {ArticleService} from "../../../services/articleService/article.service";

@Component({
  selector: 'app-delete-article-dialog',
  templateUrl: './delete-article-dialog.component.html',
  styleUrls: ['./delete-article-dialog.component.sass']
})
export class DeleteArticleDialogComponent<T> implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data : Article,
    public dialogRef: MatDialogRef<T>,
    private articleService : ArticleService) { }

  ngOnInit(): void {
  }

  truncateTitle(): string{
    return this.data.title!.length < 40 ? this.data.title! : this.data.title!.slice(0, 40);
  }

  onDeleteArticle(): void{
    this.articleService
      .deleteById(this.data.id!)
      .subscribe(() => this.dialogRef.close(true));
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
