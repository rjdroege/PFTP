import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Elected } from "./congress.model";

const CONGRESS_API_KEY: string = 'NtMWNbbMMNADlfbsm0a71OVYN0HXLgU0C5AUU3AF';
const GEOCODE_API_KEY: string = '';
const GEOCODE_URL: string = '';
const SENATE_URL: string = 'https://api.propublica.org/congress/v1/117/senate/members.json';
const HOUSE_URL: string = 'https://api.propublica.org/congress/v1/117/house/members.json';

@Injectable({
  providedIn: 'root'
})
export class CongressService {
  constructor(private http: HttpClient){}

    getHouse() {
      const headers = new HttpHeaders ({ 'X-API-Key': 'NtMWNbbMMNADlfbsm0a71OVYN0HXLgU0C5AUU3AF'
      });
      return this.http.get(HOUSE_URL, {headers: headers}).subscribe((res) => {
        console.log(res);
      })

    }
}
