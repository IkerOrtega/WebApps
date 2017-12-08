
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
  private isText: boolean;
  constructor(private authService: AuthenticationService,private router: Router) {
    if(this.authService.user$.value !== null){
      this.loginText="Welcome, "+ this.authService.user$.value;
      this.isText=true;
    }
    else if(this.authService.user$.value === null){
    this.loginText="";
    this.isText=false;
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
    if(input != "") 
    {this.isText=true;}
    else{
      this.isText=false;
    }
    
    }


    logout(){
      this.authService.logout();
      this.router.navigate(['home']);
      this.loginText="You have been logged out";
      this.isText = false;

    }

  ngOnInit() {
    
  }
}
