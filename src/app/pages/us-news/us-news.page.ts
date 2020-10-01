import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-us-news',
  templateUrl: './us-news.page.html',
  styleUrls: ['./us-news.page.scss'],
})
export class UsNewsPage implements OnInit {
  article: any;
  constructor(private serv: NewsService) { }

  ngOnInit() {
    this.article = this.serv.CurrentArticle;
  }


}
