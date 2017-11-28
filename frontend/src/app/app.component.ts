import { Component,Output } from '@angular/core';
import { PostDataService } from './post-data.service';
import {Post} from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostDataService]
})
export class AppComponent {
  title = 'app';


  constructor(private _postDataService : PostDataService) { 


    
  }
  newPostAdded(post) {
    this._postDataService.addNewPosts(post);
  }
  
}
