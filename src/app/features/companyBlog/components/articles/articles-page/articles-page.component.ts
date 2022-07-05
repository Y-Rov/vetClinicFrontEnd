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
import {ProcedureParameters} from "../../../../../core/models/operational-models/QueryParameters/ProcedureParameters";

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

  pageSizeOptions: { name: string; value: number }[] = [
    { name: '5', value: 5 },
    { name: '10', value: 10 }
  ];

  pageInfo: ProcedureParameters | null = null;
  currentPageSize: number = this.pageSizeOptions[0].value;
  filterValue: string | null = null;
  currentOrderByOption: string | null = null;
  currentOrderByDirection: string | null = 'asc';

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

  updateList(
    pageNumber: number = 1,
    pageSize: number = 5,
    filterParam: string | null = null,
    orderByParam: string | null = null,
    orderByDirection: string | null = null): void{
    this.articleService.getAllPaged(
        pageNumber,
        pageSize,
        filterParam,
        orderByParam,
        orderByDirection,
        !(this.authService.isAuthorized() && this.authService.isInRole('Admin')))
      .subscribe(data => {
        this.articles = data.entities;
        this.dataSource.data = data.entities;
        this.updatePageInfo(data);
      });
      return;
  }

  private updatePageInfo(data: ProcedureParameters): void {
    this.pageInfo = <ProcedureParameters>data;
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

  selectPageSizeOptions(): void {
    this.updateList(1, this.currentPageSize);
  }

  onPrevPageClick(): void {
    if (this.pageInfo?.hasPrevious) {
      this.updateList(this.pageInfo!.currentPage - 1, this.pageInfo!.pageSize, this.currentOrderByOption);
    }
  }

  onNextPageClick(): void {
    if (this.pageInfo?.hasNext) {
      this.updateList(this.pageInfo!.currentPage + 1, this.pageInfo!.pageSize, this.currentOrderByOption);
    }
  }

  setOrderByProperty(column: string): void{
    //asc => desc => no
    if(this.currentOrderByOption === column){
      if(this.currentOrderByDirection === 'asc'){
        this.currentOrderByDirection = 'desc';
      } else if(this.currentOrderByDirection === 'desc'){
        this.currentOrderByDirection = null;
        this.currentOrderByOption = null;
      }
    } else {
      this.currentOrderByOption = column;
      this.currentOrderByDirection = 'asc';
    }
    this.updateList(
      1,
      this.pageInfo!.pageSize!,
      this.filterValue,
      this.currentOrderByOption,
      this.currentOrderByDirection);
  }
}
