import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../article/article";
import {Observable} from "rxjs/Observable";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles
        console.log(articles);
      }
    );
  }

}