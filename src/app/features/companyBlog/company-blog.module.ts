import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsContainerComponent } from './components/comments/comments-container/comments-container.component';
import { DisplayCommentComponent } from './components/comments/display-comment/display-comment.component';
import { EditCommentDialogComponent } from './components/comments/edit-comment-dialog/edit-comment-dialog.component';
import { DeleteArticleDialogComponent } from './components/articles/delete-article-dialog/delete-article-dialog.component';
import { EditArticleDialogComponent } from './components/articles/edit-article-dialog/edit-article-dialog.component';
import { NewArticleDialogComponent } from './components/articles/new-article-dialog/new-article-dialog.component';
import { ArticleCardComponent } from './components/articles/article-card/article-card.component';
import { ArticleMenuComponent } from './components/articles/article-menu/article-menu.component';
import { ViewArticleComponent } from './components/articles/view-article/view-article.component';
import { PreviewArticleComponent } from './components/articles/preview-article/preview-article.component';
import { ArticlesPageComponent } from './components/articles/articles-page/articles-page.component';
import { CompanyBlogRoutingModule } from "./company-blog-routing.module";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { ViewArticleContainerComponent } from './components/articles/view-article-container/view-article-container.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    CommentsContainerComponent,
    DisplayCommentComponent,
    EditCommentDialogComponent,
    DeleteArticleDialogComponent,
    EditArticleDialogComponent,
    NewArticleDialogComponent,
    ArticleCardComponent,
    ArticleMenuComponent,
    ViewArticleComponent,
    PreviewArticleComponent,
    ArticlesPageComponent,
    ViewArticleContainerComponent
  ],
    imports: [
        CommonModule,
        CompanyBlogRoutingModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        AngularEditorModule,
        MatCardModule,
        MatTableModule,
        MatSelectModule,
        FormsModule,
        MatSnackBarModule,
        MatSortModule
    ],
  providers: [
  ],
})
export class CompanyBlogModule { }
