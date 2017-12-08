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
import {PostResolverService} from './post-resolver.service';
import {AuthGuardService} from './../user/auth-guard.service';
 
const routes = [
{path: 'post/list', canActivate: [ AuthGuardService ], component: PostListComponent},
{path: 'post/add',canActivate: [ AuthGuardService ], component: AddPostsComponent },
{path: 'post/:id', component: PostDetailComponent,resolve: {post: PostResolverService}}
];

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
   PostComponent,
    AddPostsComponent,
  PostListComponent,
  PostDetailComponent,
],
providers: [
  PostDataService,
  PostResolverService,
]
})
export class PostModule { }
