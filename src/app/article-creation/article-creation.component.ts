import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import {Observable} from "rxjs/Observable";
import { Article } from "../article/article";
import { ArticleService } from "../article.service";

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {

  articleForm : FormGroup;

  constructor(private articleService: ArticleService, private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      title: ['Fake Title', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  ngOnInit(): void {
  }

  createArticle() {
    const newArticle: Article = {id: 0,
                                title: this.articleForm.get('title')?.value,
                                content: this.articleForm.get('content')?.value,
                                authors: this.articleForm.get('authors')?.value}
    this.articleService.addArticle(newArticle).subscribe(
      (article) => {
        console.log(article);
      }
    );
  }
}
