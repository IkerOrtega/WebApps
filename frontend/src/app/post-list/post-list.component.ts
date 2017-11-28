import { Component, OnInit,Input } from '@angular/core';
import {Post} from './../post/post.model'
import { PostDataService } from '../post-data.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostDataService]
})
export class PostListComponent implements OnInit {
  private _posts: Post[];
  constructor(private _postDataService : PostDataService) { 
    this._posts=this._postDataService.posts;
  }

  ngOnInit() {
  }
  
}