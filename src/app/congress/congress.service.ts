import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Rep } from "../shared/rep/rep.model";
import { Senator } from "../shared/senator/senate.model";
import { environment } from "src/environments/environment";

const CONGRESS_API_KEY: string = environment.congressAPIKey;
const SENATE_URL: string = 'https://api.propublica.org/congress/v1/117/senate/members.json';
const HOUSE_URL: string = 'https://api.propublica.org/congress/v1/117/house/members.json';

@Injectable({
  providedIn: 'root'
})
export class CongressService {
  allSens = [];
  abbSens: Senator[] = [];
  allReps = [];
  abbReps: Rep[] = [];

  constructor(private http: HttpClient) {}

  getSenate() {
    const headers = new HttpHeaders ({ 'X-API-Key': CONGRESS_API_KEY
    });
    return this.http.get<[]>(SENATE_URL, {headers: headers}).subscribe((senators) => {
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
  }

  getReps() {
    const headers = new HttpHeaders ({ 'X-API-Key': CONGRESS_API_KEY
    });
    return this.http.get<[]>(HOUSE_URL, {headers: headers}).subscribe((reps) => {
      this.allReps.push(reps);
      for (const {first_name, last_name, state, district, contact_form,
        facebook_account, next_election,
        phone, twitter_account, youtube_account} of this.allReps[0].results[0].members) {
          const newRep = new Rep(
            first_name,
            last_name,
            state,
            district,
            contact_form,
            facebook_account,
            next_election,
            phone,
            twitter_account,
            youtube_account
          );
          this.abbReps.push(newRep);
        ;}
    });
  }

}
