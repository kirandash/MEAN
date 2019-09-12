import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-create',
  templateUrl: 'post-create.component.html',
  styleUrls: ['post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle: string;
  enteredValue: string;
  @Output() createdPost = new EventEmitter<Post>();
  constructor() {

  }
  saveData() {
    const post = {title: this.enteredTitle, content: this.enteredValue};
    this.createdPost.emit(post);
  }
}
