// import { Component, EventEmitter, Output } from '@angular/core';
import { Component, EventEmitter } from '@angular/core';
import { Post } from '../post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: 'post-create.component.html',
  styleUrls: ['post-create.component.css']
})

export class PostCreateComponent {
  // enteredTitle: string;
  // enteredValue: string;
  // @Output() createdPost = new EventEmitter<Post>();
  // createdPost = new EventEmitter<Post>();
  constructor(public postService: PostService) {

  }
  saveData(form) {
    if (form.invalid) {
      return;
    }
    // const post = {title: form.value.title, content: form.value.content};
    // this.createdPost.emit(post);
    this.postService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
