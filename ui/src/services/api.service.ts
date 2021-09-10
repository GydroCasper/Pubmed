import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const host = "http://localhost:3000";

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	articles: any;
	articleDetails: any = {};

	constructor(private httpClient: HttpClient) {}

	public async getArticles() {
		if (!this.articles) {
			this.articles = await this.httpClient
				.get(host)
				.toPromise();
		}

		return this.articles;
	}

	public async getArticleDetails(id: string) {
		if (!this.articleDetails[id]) {
			this.articleDetails[id] = this.httpClient
				.get(`${host}/article/${id}`)
				.toPromise();
		}

		return this.articleDetails[id];
	}
}
