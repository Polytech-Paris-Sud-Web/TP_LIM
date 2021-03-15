import { Component, OnInit } from '@angular/core';
import { IArticle } from '../article/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: IArticle[] = [{ title: 'My First Article', author:'Tony', content: 'Hello World' },
  { title: 'Second Article', author:'Tony', content: 'Second content' },
  { title: 'Third Article', author:'Personne', content: 'Third content' }]
  constructor() { }

  ngOnInit(): void {
  }

}
