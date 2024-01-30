import { Component, inject } from '@angular/core';
import { Post } from './interfaces/post.interface';
import { PostsService } from './services/post.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <button (click)="createPost()">Create post</button>
    <h3>Posts</h3>
    <ul>
      @for (post of posts | async; track post.userId) {
        <ng-container>
          <li>{{ post.title }}</li>
        </ng-container>
      }
    </ul>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  postsService = inject(PostsService);
  posts = this.postsService.getAllPosts()
  
  createPost(): void {
    const newPost: Post = {
      completed: false,
      title: 'Brand new post',
      userId: 1,
    };
    
    this.postsService.createPost(newPost).subscribe(() => {
      alert('Post created successfully');
    });
  }
}
