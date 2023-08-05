import { Injectable } from '@angular/core';

export interface BlogArticle {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogData: BlogArticle[] = [
    { id: 1, title: 'First Blog Post', content: 'Content of the first post.' },
    { id: 2, title: 'Second Blog Post', content: 'Content of the second post.' }
  ];

  getAllArticles(): BlogArticle[] {
    return this.blogData;
  }

  getArticleById(id: number): BlogArticle | undefined {
    return this.blogData.find(article => article.id === id);
  }
}

