declare var require: any;
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Post} from './../post.model';
import { PostDataService } from './../post-data.service'
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
const uuidv1 = require('uuid/v1');

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
  providers: [PostDataService]
})
export class AddPostsComponent implements OnInit {
  @Output() public newPost = new EventEmitter<Post>();
  private post: FormGroup;
  private id : string;
  constructor(private fb: FormBuilder, private _postDataService: PostDataService) { }

  ngOnInit() {
    this.post = this.fb.group({
      title:this.fb.control('', [Validators.required, Validators.minLength(3)]),
      body: this.fb.control('', [Validators.required, Validators.minLength(3)])
    })
  }

 onSubmit()
  {
    this.id = uuidv1();
    const post = new Post(this.id,this.post.value.title,this.post.value.body);
    this._postDataService.addNewPost(post).subscribe
  }

}

