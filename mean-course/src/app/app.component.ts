import { Component } from '@angular/core';
import { Post } from './posts/post.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN Application';
  storedPosts: Post[] = [];

  onPostCreation(post) {
    this.storedPosts.push(post);
  }
}
