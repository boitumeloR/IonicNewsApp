import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { }
  CurrentArticle: any;

  getTopNews() {
    const url = 'https://newsapi.org/v2/top-headlines?country=za&apiKey=15b74d6341384e01b03376dcf826cb7b';
    return this.http.get(url);
  }

  getSearchNews(searchterm) {
    const url = 'https://newsapi.org/v2/everything?q=' + searchterm + '&apiKey=15b74d6341384e01b03376dcf826cb7b';
    return this.http.get(url);
  }
}
