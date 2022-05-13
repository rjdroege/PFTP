import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CongressService } from '../congress.service';


@Component({
  selector: 'app-district-search',
  templateUrl: './district-search.component.html',
  styleUrls: ['./district-search.component.css']
})
export class DistrictSearchComponent implements OnInit {
finalArray =[];

  constructor(private http: HttpClient, private conService: CongressService) { }

  ngOnInit(): void {
  }

  onFormSubmit(searchText: string) {
    this.conService.getOfficials(searchText);
  }

}
