import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  firebaseRootURL =
  'https://pftp-a566d-default-rtdb.firebaseio.com/officials.json';

  constructor(private http: HttpClient) {}

  saveOfficialsToFirebase(){

  }
}
