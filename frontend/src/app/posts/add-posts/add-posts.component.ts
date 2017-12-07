declare var require: any;
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Post} from './../post.model';
import { PostDataService } from './../post-data.service'
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router'


@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
  providers: [PostDataService]
})
export class AddPostsComponent implements OnInit {
  @Output() public newPost = new EventEmitter<Post>();
  private post: FormGroup;
  private sdate : string;
  private date : Date;
  private minutes: string;
  private month: number;
  constructor(private fb: FormBuilder, private _postDataService: PostDataService,private _router: Router) { }

  ngOnInit() {
    this.post = this.fb.group({
      title:this.fb.control('', [Validators.required, Validators.minLength(3)]),
      body: this.fb.control('', [Validators.required, Validators.minLength(3)])
    })
  }
  formatDate(date :Date){
    if (date.getMinutes() < 10) {
      this.minutes = "0" + date.getMinutes();
    } else {
      this.minutes = date.getMinutes().toString();
    }
    this.month = date.getMonth() + 1;

    return date.getDay() + "/" + this.month + "/" + date.getFullYear() + " " + date.getHours() + ":" + this.minutes;
  }

 onSubmit()
  {
     this.date = new Date();
     this.sdate = this.formatDate(this.date);
    const post = new Post(this.post.value.title,this.post.value.body,this.date,this.sdate,"example Author");
    this._postDataService.addNewPost(post).subscribe(); 
    this._router.navigate(['post/list']);
  }
}



