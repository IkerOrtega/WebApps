import { Injectable } from '@angular/core';
import {Post} from './post.model'
import { Resolve} from '@angular/router'
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import {PostDataService} from './post-data.service'
@Injectable()
export class PostResolverService implements Resolve<Post>{

  constructor(private postService : PostDataService) { }
  

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<Post> {
      return this.postService.getPost(route.params['id']);
}
  

}
