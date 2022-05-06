import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const CONGRESS_API_KEY: string = 'NtMWNbbMMNADlfbsm0a71OVYN0HXLgU0C5AUU3AF';
const GEOCODE_API_KEY: string = '';
const GEOCODE_URL: string = '';

@Injectable({
  providedIn: 'root'
})
export class CongressService {
  constructor(private http: HttpClient){}

  // onGetLocation() {
  //   this.http.get(
  //   ).subscribe((res) => {
  //     console.log(res);
  //   });

  // }
}
