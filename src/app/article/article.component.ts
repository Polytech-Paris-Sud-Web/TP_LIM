import { Component, Input, OnInit } from '@angular/core';
import { Article } from './article';
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    
  @Input()
  article: Article;

  constructor(private articleService: ArticleService){
    this.article = {id: 0, title: 'Name', authors: 'Tony', content:'Hello World'}
  }

  deleteArticle(id: number) {
    console.log("deleteArticle" + id)
    
    return this.articleService.deleteArticle(id).subscribe(
      () => {
        console.log("article deleted")
      }
    );
  }

  ngOnInit(): void {
  }

}