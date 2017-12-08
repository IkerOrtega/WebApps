import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from '../page-not-found/page-not-found.component'
import { PreloadAllModules } from '@angular/router';
import {LoginComponent} from './../user/login/login.component';
import {RegisterComponent} from './../user/register/register.component';
import {AuthGuardService} from './../user/auth-guard.service';
import {HomeComponent} from './../home/home.component';

const appRoutes:Routes = [
  {
    path: 'post', canActivate: [ AuthGuardService ],loadChildren: 'app/posts/post.module#PostModule'
  }, { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path :'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
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
