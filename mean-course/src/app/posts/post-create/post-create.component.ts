// import { Component, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';
import { PostService } from '../post.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: 'post-create.component.html',
  styleUrls: ['post-create.component.css']
})

export class PostCreateComponent implements OnInit {
  // enteredTitle: string;
  // enteredValue: string;
  // @Output() createdPost = new EventEmitter<Post>();
  // createdPost = new EventEmitter<Post>();
  private mode = 'create';
  private postId: string;
  private post: Post;
  constructor(public postService: PostService, public route: ActivatedRoute) {

  }
  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      if (param.has('postId')) {
        this.mode = 'edit';
        this.postId = param.get('postId');
        this.post = this.postService.getPost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
        this.post = null;
      }
    });
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
