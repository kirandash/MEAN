import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  posts: Post[] = [];
  postsUpdated = new Subject<Post[]>(); // Create an observable for post with Subject and asObservable
  constructor() {

  }
  getPosts() {
    // return this.posts; // This will return the original array. Always work with clones
    return [...this.posts];
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(postTitle: string, value: string) {
    this.posts.push({title: postTitle, content: value});
    this.postsUpdated.next([...this.posts]);
  }
}
