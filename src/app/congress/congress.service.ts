import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Official } from "../shared/official/official.model";

const GOOGLE_API_KEY: string = environment.googleAPIKey;

@Injectable({
  providedIn: 'root'
})
export class CongressService {
finalArray= [];

  constructor(private http: HttpClient) {}

  getOfficials(searchText: string) {
    const headers = new HttpHeaders ({ 'accept': 'application/json' });
    const formattedQuery = searchText.split(" ").join("%20");
    this.http.get<{}>(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${formattedQuery}&includeOffices=true&levels=country&key=${GOOGLE_API_KEY}`,
    {headers: headers}).subscribe((fedReps) => {
      const allFedReps = Object.assign(fedReps);
      const repsArray = Object.entries(allFedReps);
      const apiOfficials: any = repsArray[4][1];
      console.log(apiOfficials);
      apiOfficials.forEach(official => {
        let myOfficial = new Official(
          official?.name,
          official?.phones[0] || '',
          official?.urls[0] || ''
        );
        this.finalArray.push(myOfficial);
      });
        console.log(this.finalArray);
    });
  }
}
