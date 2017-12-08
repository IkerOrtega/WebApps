
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../user/authentication.service';
import { Observable } from 'rxjs/Rx';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private loginText : string;
  constructor(private authService: AuthenticationService,private router: Router) {
    if(this.authService.user$.value !== null){
      this.loginText="Welcome, "+ this.authService.user$.value;
    }
    else if(this.authService.user$.value === null){
    this.loginText="";
    }
  }
    
  get currentUser(): Observable<string> {
      return this.authService.user$;
    }
   
    get getloginText(){
      return this.loginText;
    }
   
    setloginText(input:string){
      window.location.reload();
    this.loginText=input;
    
    }


    logout(){
      this.authService.logout();
      this.router.navigate(['post/list']);
      this.loginText="You have been logged out";

    }

  ngOnInit() {
    
  }
}
