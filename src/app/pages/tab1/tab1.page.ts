import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from 'src/app/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private router: Router, private serv: NewsService) { }
  NewsData: any;
  ngOnInit() {
    this.NewsData = 'Loading...';
    this.serv.getTopNews().subscribe(data => {
      this.NewsData = data;
      console.log(this.NewsData);
    });
  }

  ViewArticle(art) {
    console.log(art);
    this.serv.CurrentArticle = art;
    this.router.navigateByUrl('us-news');
  }
}
