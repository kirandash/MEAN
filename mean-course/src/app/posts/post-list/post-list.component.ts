// import { Component, Input } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.interface';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
  // @Input() posts: Post[];
  posts: Post[];
  postsSubscription: Subscription;
  constructor(public postService: PostService) {
    /*this.posts = [
      {title: 'Singapore wins the game!', content: 'This is full lorem ipusum content. You can keep reading.'},
      {title: 'India lifts the world Cup!', content: 'And It\'s an Indian Captain who has been absolutely outstanding!'},
    ];*/
    // this.posts = [];
  }

  ngOnInit() {
    this.postService.getPosts();
    // this.posts = this.postService.getPosts(); // This will not update, so better to use observable
    this.postsSubscription = this.postService.getPostsUpdatedListener().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
