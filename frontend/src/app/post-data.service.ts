import { Injectable } from '@angular/core';
import {Post} from './post/post.model'
@Injectable()
export class PostDataService {
  private _posts = new Array<Post>();
  constructor() {
    let Post1 = new Post("post 1","first test post");
    let Post2 = new Post("post 2","another test post");

    this._posts.push(Post1);
    this._posts.push(Post2);
   }

   get posts() {
    return this._posts;
  }

  addNewPosts(post){
    this._posts.push(post);
  }

}
