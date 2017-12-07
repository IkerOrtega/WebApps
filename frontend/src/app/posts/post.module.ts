import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostComponent} from './post/post.component';
import {AddPostsComponent} from './add-posts/add-posts.component';
import {PostListComponent} from './post-list/post-list.component';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {PostDataService} from './post-data.service';
import { RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes = [
{path: 'post-list', component: PostListComponent},
{path: 'add-post', component: AddPostsComponent },
{path: 'post-detail/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
   PostComponent,
    AddPostsComponent,
  PostListComponent,
  PostDetailComponent
],
providers: [
  PostDataService
]
})
export class PostModule { }
