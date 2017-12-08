import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators, FormControl,ReactiveFormsModule } from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {NavbarComponent} from './../../navbar/navbar.component';


function passwordValidator(length: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    return control.value.length < length ? { 'passwordTooShort': { requiredLength: length, actualLength: control.value.length } } : null;
  };
}



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
  
})
export class LoginComponent implements OnInit {
  public user: FormGroup;
  public errorMsg: string;
  private message : string;


  constructor(private authService: AuthenticationService, private router: Router, private fb: FormBuilder,private navBar: NavbarComponent) { }

  ngOnInit() {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  get currentUser(): Observable<string> {
    return this.authService.user$;
  }
  
  onSubmit() {
    this.authService.login(this.user.value.username, this.user.value.password).subscribe(val => {
      if (val) {
        console.log(val);

        if (this.authService.redirectUrl) {
          
          this.router.navigateByUrl(this.authService.redirectUrl);
          this.authService.redirectUrl = undefined;
        } else {
         
          this.router.navigate(['/post/list']);
          this.navBar.setloginText("Welcome, " + this.user.value.username );

        }
      }
        
    }, err => this.errorMsg = err.json().message);
  }
}

