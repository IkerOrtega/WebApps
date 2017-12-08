import { Component,Output } from '@angular/core';
import { PostDataService } from './posts/post-data.service';
import {Post} from './posts/post.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthenticationService } from './user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit(){
    
  }


  constructor() {  }
  
  
  
}
