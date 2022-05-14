import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Official } from 'src/app/shared/official/official.model';
import { CongressService } from '../congress.service';
import { pipe, tap } from 'rxjs';


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
    private http: HttpClient,
    private conService: CongressService,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onFormSubmit(searchText: string) {
    this.conService.getOfficials(searchText);
    this.conService.updatedOfficials.subscribe((officials: Official[]) => {
      this.officialResults = officials;
    });
  }

  saveReps(){
    this.http.put(this.firebaseRouteURL, this.officialResults).subscribe((res) => {
      console.log(res);
    });
  }

}
