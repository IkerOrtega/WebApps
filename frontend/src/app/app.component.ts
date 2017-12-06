import { Component,Output } from '@angular/core';
import { PostDataService } from './post-data.service';
import {Post} from './post/post.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostDataService]
})
export class AppComponent implements OnInit {
  title = 'app';
  private _posts: Post[];

  ngOnInit(){
    this._postDataService.posts.subscribe(items => this._posts = items);
  }


  constructor(private _postDataService : PostDataService) {  }
  
  get posts(){
    return this.posts;
  }

  newPostAdded(post){
    this._postDataService.addNewPost(post).subscribe(item => this._posts.push(item));
  }
  
}
