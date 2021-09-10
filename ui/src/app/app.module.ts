import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesListComponent } from '../components/articles-list/articles-list.component';
import { ArticleItemComponent } from '../components/article-item/article-item.component';
import { ArticleDetailsComponent } from '../components/article-details/article-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from 'src/services/api.service';

const routes: Routes = [
  {path: 'article/:id', component: ArticleDetailsComponent, pathMatch: 'full'},
  {path: '', component: ArticlesListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleItemComponent,
    ArticleDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
