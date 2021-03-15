import { Component, Input, OnInit, Output } from '@angular/core';
import { Article } from './article';
import { ArticleService } from "../article.service";
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    
  @Input()
  article: Article;
  @Output()
  deletedArticle: EventEmitter<Article> = new EventEmitter<Article>();

  constructor(){
    this.article = {id: 0, title: 'Name', authors: 'Tony', content:'Hello World'}
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }

  ngOnInit(): void {
  }

}