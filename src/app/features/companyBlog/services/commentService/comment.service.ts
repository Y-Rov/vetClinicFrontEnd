import { Injectable } from '@angular/core';
import {ResourceService} from "../../../../core/services/resourceService/resource.service";
import {Comment} from "../../../../core/models/Comment";
import {HttpClient} from "@angular/common/http";
import {Location} from "@angular/common";
import {catchError, Observable} from "rxjs";
import {AuthService} from "../../../../core/services/authService/auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'any'
})
export class CommentService extends ResourceService<Comment>{

  constructor(
    private httpClient: HttpClient,
    private currentLocation: Location,
    private authService: AuthService
  ) {
    super(httpClient, currentLocation, Comment, 'https://localhost:5001/api/comments');
  }

  postComment(comment: Comment): Observable<Comment>{
    const viewModel = {
      content: comment.content,
      authorId: this.authService.getUserId()! as number,
      articleId: comment.articleId
    }
    return this.httpClient.post<Comment>(this.apiUrl, viewModel, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<Comment>('getById'))
      );
  }

  updateComment(comment: Comment): Observable<Comment>{
    const viewModel = {
      content: comment.content,
      id: comment.id
    }

    return this.httpClient.put<Comment>(this.apiUrl, viewModel, this.httpOptions)
      .pipe(
        map((result) => new this.tConstructor(result)),
        catchError(this.handleError<Comment>('getById'))
      );
  }

  getByArticleId(articleId: number): Observable<Comment[]>{
    const url: string = this.apiUrl + `/article/${articleId}`

    return this.httpClient.get<Comment[]>(url, this.httpOptions)
      .pipe(
        map((result) => result.map((i) => new this.tConstructor(i))),
        catchError(this.handleError<Comment[]>('getAll', []))
      );
}
}
