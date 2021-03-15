import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import { Article } from "./article/article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http : HttpClient) { }
  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/articles");
  }
  public deleteArticle(id: number): Observable<{}> {
    const url = "http://localhost:3000/articles/"+ id
    return this.http.delete(url);
  }
}
