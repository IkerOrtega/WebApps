import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component'
import { PreloadAllModules } from '@angular/router';

const appRoutes:Routes = [
  {
    path: 'post', loadChildren: 'app/posts/post.module#PostModule'
  },
  { path: '', redirectTo: 'post/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
