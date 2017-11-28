import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Post} from './../post/post.model';


@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {
  @Output() public newPost = new EventEmitter<Post>();
  constructor() { }

  ngOnInit() {
  }

  AddPost(newTitle: HTMLInputElement, newBody: HTMLInputElement): boolean
  {
    let post = new Post(newTitle.value,newBody.value);
    this.newPost.emit(post);
    return false;
  }

}

