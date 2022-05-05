import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onFormSubmit(formObj: NgForm){
    if (!formObj.valid) return;
    const { email, password } = formObj.value;
    if (this.isLoginMode) {

    } else {
      this.authService.signUp(email, password).subscribe(
        (res) => {
          console.log("Auth Success!", res);
        }, (err) => {
          console.error("Auth Error!", err);
        }
      );
    }
      formObj.reset();
  }

}
