import { Component, OnInit } from '@angular/core';
import { BlogService, BlogArticle } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles: BlogArticle[] = [];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.articles = this.blogService.getAllArticles();
  }
}
