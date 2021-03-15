import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
    
  @Input()
  title: string;
  @Input()
  author: string;
  @Input("customContent")
  content: string;

  constructor(){
    this.title = 'Name';
    this.author = 'Tony';
    this.content = 'Hello World';
  }

  ngOnInit(): void {
  }

}