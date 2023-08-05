import { Injectable } from '@angular/core';

export interface BlogArticle {
  title: string;
  content: string;
  tag: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogData: BlogArticle[] = [
    { title: 'First Blog Post', content: 'Content of the first post.', tag: 'first-blog-post' },
    { title: 'Second Blog Post', content: 'Content of the second post.', tag: 'second-blog-post' }
  ];

  getAllArticles(): BlogArticle[] {
    return this.blogData;
  }

  getArticleByTag(tag: string): BlogArticle | undefined {
    return this.blogData.find(article => article.tag === tag);
  }
}

