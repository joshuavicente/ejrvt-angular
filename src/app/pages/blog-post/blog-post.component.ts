import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, BlogArticle } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  article: BlogArticle | undefined;

  constructor(
    private route: ActivatedRoute, 
    private blogService: BlogService
  ) { }
  
  ngOnInit(): void {
    const tag = this.route.snapshot.paramMap.get('tag');
    this.article = tag ? this.blogService.getArticleByTag(tag) : undefined;
  }

}
