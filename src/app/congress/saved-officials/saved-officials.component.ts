import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Official } from 'src/app/congress/official.model';

@Component({
  selector: 'app-saved-officials',
  templateUrl: './saved-officials.component.html',
  styleUrls: ['./saved-officials.component.css']
})
export class SavedOfficialsComponent implements OnInit {
  firebaseRouteURL =
  'https://pftp-a566d-default-rtdb.firebaseio.com/officials.json';
  savedOfficials: Official[]= [];
  official: Official;
  i: number;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getReps();
      }

  getReps(){
    return this.http.get<Official[]>(this.firebaseRouteURL).subscribe((officials) => {
      this.savedOfficials = officials;
      console.log(officials);
    });

  }

}
