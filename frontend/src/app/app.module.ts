import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './posts/post/post.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import { PostListComponent } from './posts/post-list/post-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { PostModule } from './posts/post.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import {UserModule} from './user/user.module'

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    PostModule,
    AppRoutingModule,
    UserModule,
    SuiModule,
    ReactiveFormsModule

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
