import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {FormBuilder, FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {ArticleService} from "../../../services/articleService/article.service";
import {Article} from "../../../../../core/models/Article";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {DateTimeService} from "../../../services/dateTimeService/date-time.service";
import {NewArticleDialogComponent} from "../new-article-dialog/new-article-dialog.component";
import {AuthService} from "../../../../../core/services/authService/auth.service";

@Component({
  selector: 'app-articles-page',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.sass']
})
export class ArticlesPageComponent implements OnInit {

  articles: Article[] = [];

  selected = new FormControl('grid');

  dataSource: MatTableDataSource<Article> = new MatTableDataSource(this.articles);
  displayedColumns: string[] = ['title', 'createdAt', 'authorName'];

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private formBuilder : FormBuilder,
              private articleService: ArticleService,
              private matDialog: MatDialog,
              public dateTimeService: DateTimeService,
              public authService: AuthService) {
    this.updateList();
    if(authService.isAuthorized() && authService.isInRole('Admin')){
      this.displayedColumns.push('action');
    }
  }

  updateList(): void{
    if(this.authService.isAuthorized() && this.authService.isInRole('Admin')){
      this.articleService.getAll().subscribe(data => {
        this.articles = data;
        this.dataSource.data = data;
        this.dataSource.sort = this.sort!;
      });
      return;
    }
    this.articleService.getPublished().subscribe(data => {
      this.articles = data;
      this.dataSource.data = data;
      this.dataSource.sort = this.sort!;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  ngOnInit(): void {
  }

  onDeleteArticle(event: any): void{
    this.articles = this.articles.filter(a => a.id !== event.id);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onNewArticle(){
    const dialogRef = this.matDialog.open(NewArticleDialogComponent);

    dialogRef
      .afterClosed()
      .subscribe((requireReload: boolean) => {
        if(requireReload)
          this.updateList()
        }
      );
  }

  onArticleChange(): void {
    this.updateList();
  }
}
