import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
  posts: Post[] = [];
  postsUpdated = new Subject<Post[]>(); // Create an observable for post with Subject and asObservable
  constructor(public http: HttpClient) {

  }
  getPosts() {
    this.http
      .get<{status: string, message: string, posts: any}>('http://localhost:3000/api/posts')
      .pipe(map((postData) =>  {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          }; // mapping _id to id with map
        });
      }))
      .subscribe((modifiedPosts: Post[]) => {
        this.posts = modifiedPosts; // get the posts
        this.postsUpdated.next([...this.posts]); // update the posts observable
      });
    // return this.posts; // This will return the original array. Always work with clones
    // return [...this.posts];
  }

  getPostsUpdatedListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(postTitle: string, value: string) {
    const post = {id: null, title: postTitle, content: value};
    this.http.post('http://localhost:3000/api/post', post).subscribe((response: { message: string, postId: string }) => {
      post.id = response.postId;
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPost(postId) {
    return {...this.posts.find(post => post.id === postId)};
  }

  deletePost(postId) {
    this.http.delete('http://localhost:3000/api/post/' + postId).subscribe((response: {status: string, message: string}) => {
      if (response.status === 'success') {
        console.log(response.message);
        const updatedPosts = this.posts.filter(post => post.id !== postId);
        this.posts = updatedPosts; // Update the main posts array
        this.postsUpdated.next([...this.posts]); // send the latest post to observable
      }
    });
  }
}
