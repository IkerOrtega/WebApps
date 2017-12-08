import { AuthenticationService } from '../user/authentication.service';
import { Injectable } from '@angular/core';
import {Post} from './post.model'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ObserveOnMessage } from 'rxjs/operators/observeOn';


@Injectable()
export class PostDataService {
  private _appUrl = 'http://localhost:4200/api';
  constructor( private http: Http, private auth: AuthenticationService) {
   
   }

  get posts(): Observable<Post[]>{
    return this.http.get(`${this._appUrl}/posts`,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
      response.json().map(item => Post.fromJSON(item)));

  } 
  getPost(id): Observable<Post>{
    return this.http.get(`${this._appUrl}/post/${id}`,{ headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
    .map(response => response.json()).map(item => Post.fromJSON(item));
  }

  addNewPost(rec): Observable<Post>{ 
    
    return this.http.post(`${this._appUrl}/posts`,rec).map(res => res.json()).map(item => Post.fromJSON(item));
    
  }

  

}
