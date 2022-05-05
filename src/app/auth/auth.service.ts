import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { User } from "./user.model";
import { tap } from "rxjs/operators";

const API_KEY: string = 'AIzaSyDYr1mNEY1XPrfD05uLZKHfeCl8-bk5bw4';
const SIGN_UP_URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const SIGN_IN_URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

currentUser = new BehaviorSubject<User>(null);
userToken: string = null;

    constructor(private http: HttpClient){}

    signUp(email: string, password: string) {
      return this.http.post<AuthResponseData>(SIGN_UP_URL + API_KEY, {
        email,
        password,
        returnSecureToken: true,
      }).pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
    }

    signIn(email: string, password: string) {
      return this.http.post<AuthResponseData>(SIGN_IN_URL + API_KEY, {
        email,
        password,
        returnSecureToken: true
      }).pipe(
        tap((res) => {
          const { email, localId, idToken, expiresIn } = res;
          this.handleAuth(email, localId, idToken, +expiresIn);
        })
      );
    }

    handleAuth(email: string, userId: string, token: string, expiresIn: number) {
      const expDate = new Date(new Date().getTime() + expiresIn * 1000);
      const formUser = new User(email, userId, token, expDate);
      this.currentUser.next(formUser);
      localStorage.setItem("userData", JSON.stringify(formUser));
    }

}
