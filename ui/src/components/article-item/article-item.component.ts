import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {

  @Input()
  article: Article = { id: '', name: '', type: undefined};
    
  constructor() {
   }

  ngOnInit(): void {
  }

}
