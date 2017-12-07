
import { Injectable } from '@angular/core';
import {Post} from './post.model'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { ObserveOnMessage } from 'rxjs/operators/observeOn';


@Injectable()
export class PostDataService {
  private _appUrl = '/api/posts';
  constructor( private http: Http) {
   
   }

  get posts(): Observable<Post[]>{
    return this.http.get(this._appUrl).map(response =>
      response.json().map(item =>
        new Post(item.id,item.title,item.body)
      )
    );
  }

  getPost(id): Observable<Post>{
    return this.http.get(`${this._appUrl}/post/${id}`)
    .map(response => response.json()).map(item => new Post(item.id,item.title,item.body));
  }

  addNewPost(rec): Observable<Post>{
    
    return this.http.post(`${this._appUrl}/posts`,rec).map(res => res.json()).map(item => new Post(item.id,item.title,item.body));

  }

}
