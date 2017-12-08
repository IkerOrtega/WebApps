import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-guard.service';
import { RouterModule } from '@angular/router';
import {NavbarComponent} from './../navbar/navbar.component';
import { FormsModule }   from '@angular/forms';
const routes = [
  
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  declarations: [RegisterComponent],

  providers: [AuthenticationService,AuthGuardService,NavbarComponent
  ]
  
})
export class UserModule { }
