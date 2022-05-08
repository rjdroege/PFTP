import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Senator } from "./congress.model";

// const CONGRESS_API_KEY: string = 'NtMWNbbMMNADlfbsm0a71OVYN0HXLgU0C5AUU3AF';
const SENATE_URL: string = 'https://api.propublica.org/congress/v1/117/senate/members.json';
const HOUSE_URL: string = 'https://api.propublica.org/congress/v1/117/house/members.json';

@Injectable({
  providedIn: 'root'
})
export class CongressService {
  allSens = [];
  abbSens: Senator[] = [];

  constructor(private http: HttpClient) {}

  getSenate() {
    const headers = new HttpHeaders ({ 'X-API-Key': 'NtMWNbbMMNADlfbsm0a71OVYN0HXLgU0C5AUU3AF'
    });
    this.http.get<[]>(SENATE_URL, {headers: headers}).subscribe((senators) => {
      this.allSens.push(senators);
      for (const {first_name, last_name, state, contact_form,
        facebook_account, next_election,
        phone, twitter_account, youtube_account} of this.allSens[0].results[0].members) {
          const newSen = new Senator(
            first_name,
            last_name,
            state,
            contact_form,
            facebook_account,
            next_election,
            phone,
            twitter_account,
            youtube_account
          );
          this.abbSens.push(newSen);
        ;}
    });
    console.log(this.abbSens);
  }


}
