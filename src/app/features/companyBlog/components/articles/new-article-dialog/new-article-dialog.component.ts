import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularEditorConfig} from "@kolkov/angular-editor";
import {MatDialogRef} from "@angular/material/dialog";
import {ArticleService} from "../../../services/articleService/article.service";
import {Article} from "../../../../../core/models/Article";

@Component({
  selector: 'app-new-article-dialog',
  templateUrl: './new-article-dialog.component.html',
  styleUrls: ['./new-article-dialog.component.sass']
})
export class NewArticleDialogComponent<T> implements OnInit {

  form = new FormGroup({
    title: new FormControl("", Validators.minLength(5)),
    body: new FormControl("", Validators.minLength(5))
  });

  editorConfig: AngularEditorConfig = {
    rawPaste: false,
    outline: false,
    editable: true,
    spellcheck: true,
    minHeight: '5rem',
    maxHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    toolbarPosition: 'top',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'roboto',
    fonts: [],
    customClasses: [
      {
        name: 'Title',
        class: 'mat-title',
        tag: 'h2'
      }
    ],
    toolbarHiddenButtons: [
      [
        'strikeThrough',
        'subscript',
        'superscript',
        'justifyLeft',
        'justifyCenter',
        'justifyRight',
        'justifyFull',
        'indent',
        'outdent',
        'insertOrderedList',
        'heading',
        'fontName',
        'link',
        'unlink'
      ],
      [
        'fontSize',
        'textColor',
        'backgroundColor',
        'insertImage',
        'insertVideo',
        'insertHorizontalRule',
        'removeFormat',
        'toggleEditorMode',
      ]
    ]
  };

  constructor(@Inject(FormBuilder) private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<T>,
              private articleService : ArticleService) { }

  onPublish(): void{
    const finalData : Article = this.form.value as Article;
    finalData.edited = false;
    finalData.published = true;
    finalData.createdAt = new Date(Date.now());
    this.articleService
      .postArticle(finalData)
      .subscribe(() => this.dialogRef.close(true));
  }

  onSaveDraft(){
    const finalData : Article = this.form.value as Article;
    finalData.edited = false;
    finalData.published = false;
    finalData.createdAt = new Date();
    this.articleService
      .postArticle(finalData)
      .subscribe(() => this.dialogRef.close(true));
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

}
