import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CongressService } from "src/app/congress/congress.service";

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  firebaseRouteURL =
  'https://pftp-a566d-default-rtdb.firebaseio.com/officials.json';

  constructor(private http: HttpClient, private conService: CongressService) {}

  saveOfficialsToFirebase(){
    const officials = this.conService.getOfficial();
    this.http.put(this.firebaseRouteURL, officials).subscribe((res) => {
      console.log(res);
    });
  }
}
