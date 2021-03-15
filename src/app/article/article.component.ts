import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    
  readonly title: string;
  readonly author: string;
  readonly content: string;

  constructor(){
    this.title = 'First Article';
    this.author = 'Tony';
    this.content = 'Hello World';
  }

  ngOnInit(): void {
  }

}