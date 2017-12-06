import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Post} from './../post/post.model';
import { PostDataService } from './../post-data.service'
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
  providers: [PostDataService]
})
export class AddPostsComponent implements OnInit {
  @Output() public newPost = new EventEmitter<Post>();
  private post: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.post = this.fb.group({
      title:this.fb.control('test', [Validators.required, Validators.minLength(3)]),
      body: this.fb.control('test body', [Validators.required, Validators.minLength(3)])
    })
  }

 onSubmit()
  {
    this.newPost.emit(new Post(this.post.value.title,this.post.value.body));
  }

}

