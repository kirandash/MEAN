import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-create',
  templateUrl: 'post-create.component.html',
  styleUrls: ['post-create.component.css']
})

export class PostCreateComponent {
  // enteredTitle: string;
  // enteredValue: string;
  @Output() createdPost = new EventEmitter<Post>();
  constructor() {

  }
  saveData(form) {
    if (form.invalid) {
      return;
    }
    const post = {title: form.value.title, content: form.value.content};
    this.createdPost.emit(post);
  }
}
