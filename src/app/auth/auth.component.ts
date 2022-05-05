import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  errMsg: string = null;
  authObs: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(formObj: NgForm){
    if (!formObj.valid) return;
    const { email, password } = formObj.value;
    if (this.isLoginMode) {
     this.authObs = this.authService.signIn(email, password);
    } else {
     this.authObs = this.authService.signUp(email, password);
    }

    this.authObs.subscribe(
      (res) => {
        console.log("Auth Success!", res);
        this.router.navigate(['congress']);
      }, (err) => {
        this.errMsg = err.error.error.message;
        console.error("Auth Error!", err);
      }
    );
      formObj.reset();
  }



}
