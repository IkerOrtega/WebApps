import { Component, OnInit,Input } from '@angular/core';
import {Post} from './../post.model'
import { PostDataService } from '../post-data.service';
import {AuthenticationService} from './../../user/authentication.service'


@Component({
  selector: 'app-post-list', 
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostDataService,AuthenticationService]
})
export class PostListComponent implements OnInit {
  private _posts: Post[];
  constructor(private _postDataService : PostDataService, private auth : AuthenticationService) { 
    if(!(this.auth.user$.value !== null))
    {
    this._postDataService.posts.subscribe(items => this._posts = items);
    }
  }

  ngOnInit() {
    if(!(this.auth.user$.value == null))
    {
    this._postDataService.posts.subscribe(items => this._posts = items);
  }
  }
  
  get posts(){
    return this._posts;
  }
  
  
}
