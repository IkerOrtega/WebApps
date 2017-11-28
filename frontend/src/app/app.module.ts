import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { FormsModule } from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    AddPostsComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
