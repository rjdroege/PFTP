import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Official } from 'src/app/congress/official.model';
import { CongressService } from '../congress.service';


@Component({
  selector: 'app-district-search',
  templateUrl: './district-search.component.html',
  styleUrls: ['./district-search.component.css']
})
export class DistrictSearchComponent implements OnInit {
officialResults: Official[] =[];
firebaseRouteURL =
    'https://pftp-a566d-default-rtdb.firebaseio.com/officials.json';



  constructor(
    private conService: CongressService, private router: Router, private http: HttpClient,
    ) { }

  ngOnInit(): void {
  }

  onFormSubmit(searchText: string) {
    this.conService.getOfficials(searchText);
    this.conService.updatedOfficials.subscribe((officials: Official[]) => {
      this.officialResults = officials;
      this.http.put(this.firebaseRouteURL, this.officialResults).subscribe((res) => {
        console.log(res);
      });
      // this.router.navigate(['saved']);
    });
  }



}
