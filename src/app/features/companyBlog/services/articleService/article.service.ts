import { Injectable } from '@angular/core';
import {ResourceService} from "../../../../core/services/resourceService/resource.service";
import {Article} from "../../../../core/models/Article";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {AuthService} from "../../../../core/services/authService/auth.service";
import {catchError, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'any'
})
export class ArticleService extends ResourceService<Article>{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location,
    private authService: AuthService) {
      super(httpClient, currentLocation, Article, 'https://localhost:5001/api/articles');
  }

  postArticle(article: Article): Observable<Article>{
    const viewModel = {
      title: article.title,
      body: article.body,
      published: article.published,
      authorId: this.authService.getUserId()! as number
    }

    return this.httpClient.post<Article>(this.apiUrl, viewModel, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<Article>('postArticle'))
      );
  }

  updateArticle(article: Article): Observable<Article>{
    const viewModel = {
      id: article.id,
      title: article.title,
      body: article.body,
      published: article.published,
    }

    return this.httpClient.put<Article>(this.apiUrl, viewModel, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<Article>('updateArticle'))
      );
  }

  getPublished(): Observable<Article[]>{
    const url: string = this.apiUrl + '/published'

    return this.httpClient.get<Article[]>(url, this.httpOptions)
      .pipe(
        map((result) => result.map((i) => new this.tConstructor(i))),
        catchError(this.handleError<Article[]>('getPublished', []))
      );
  }
}
