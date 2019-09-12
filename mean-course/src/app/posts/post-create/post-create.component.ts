import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: 'post-create.component.html',
  styleUrls: ['post-create.component.css']
})

export class PostCreateComponent {
  enteredValue: string;
  savedText: string;
  constructor() {

  }
  saveData() {
    this.savedText = this.enteredValue;
  }
}
