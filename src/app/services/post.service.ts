import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  httpClient = inject(HttpClient);

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  createPost(newPost: Post): Observable<Post> {
    return this.httpClient.post<Post>('https://jsonplaceholder.typicode.com/posts', newPost);
  }
}

