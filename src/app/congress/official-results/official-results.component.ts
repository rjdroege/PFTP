import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Official } from 'src/app/congress/official.model';
import { CongressService } from '../congress.service';

@Component({
  selector: 'app-official-results',
  templateUrl: './official-results.component.html',
  styleUrls: ['./official-results.component.css'],
})
export class OfficialResultsComponent implements OnInit {
  officialResults: Official[] = [];
  firebaseRouteURL =
    'https://pftp-a566d-default-rtdb.firebaseio.com/officials.json';

  constructor(private conService: CongressService, private http: HttpClient) {}

  ngOnInit(): void {
    this.conService.updatedOfficials.subscribe((officials: Official[]) => {
      this.officialResults = officials;
    });
  }

  saveReps() {
    this.http
      .put(this.firebaseRouteURL, this.officialResults)
      .subscribe((res) => {
        console.log(res);
      });
  }

}
