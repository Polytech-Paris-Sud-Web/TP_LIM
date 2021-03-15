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
    this.refreshArticles();
  }

  refreshArticles() {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.articles = articles
        console.log(articles);
      }
    );
  }

  delete(article: Article) {
    console.log("deleteArticle" + article.id)
    this.articleService.deleteArticle(article.id).subscribe(
      () => {
        console.log("article deleted")
      }
    );
    this.refreshArticles();
  }
}