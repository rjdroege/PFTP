import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Official } from 'src/app/shared/official/official.model';

@Component({
  selector: 'app-saved-officials',
  templateUrl: './saved-officials.component.html',
  styleUrls: ['./saved-officials.component.css']
})
export class SavedOfficialsComponent implements OnInit {
  firebaseRouteURL =
  'https://pftp-a566d-default-rtdb.firebaseio.com/officials.json';
  savedOfficials: Official[]= [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
      }

  getReps(){
    return this.http.get<Official[]>(this.firebaseRouteURL).subscribe((officials) => {
        this.savedOfficials = officials;
        console.log(officials);
      });
  }

}
