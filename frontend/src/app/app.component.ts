import { Component,Output } from '@angular/core';
import { PostDataService } from './posts/post-data.service';
import {Post} from './posts/post.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthenticationService } from './user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostDataService,AuthenticationService]
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
