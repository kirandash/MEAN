import { Component, Input } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: 'post-list.component.html',
  styleUrls: ['post-list.component.css']
})

export class PostListComponent {
  @Input() posts: Post[];
  constructor() {
    this.posts = [
      {title: 'Singapore wins the game!', content: 'This is full lorem ipusum content. You can keep reading.'},
      {title: 'India lifts the world Cup!', content: 'And It\'s an Indian Captain who has been absolutely outstanding!'},
    ];
    // this.posts = [];
  }
}
