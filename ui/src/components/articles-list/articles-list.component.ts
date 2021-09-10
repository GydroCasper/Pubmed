import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/article';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];

  constructor(private apiService: ApiService) {
    this.articles = [];
   }

  async ngOnInit(): Promise<void> {
    this.articles = await this.apiService.getArticles();
  }
}
