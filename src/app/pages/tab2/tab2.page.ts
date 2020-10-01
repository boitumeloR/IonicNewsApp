import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  term: any;
  searchdata: any;
  constructor(private serv: NewsService, private http: HttpClient , private router: Router) { }
  ngOnInit() {
    this.searchdata = 'Loading...';
  }

  SearchNews() {
    console.log(this.term);
    this.serv.getSearchNews(this.term).subscribe(data => {
      this.searchdata = data;
    });
  }

  LinkToArticle(article) {
    this.router.navigateByUrl(article.url);
  }
}
