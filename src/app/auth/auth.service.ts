import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const API_KEY: string = 'AIzaSyDYr1mNEY1XPrfD05uLZKHfeCl8-bk5bw4';
const SIGN_UP_URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const SIGN_IN_URL: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient){}

}
