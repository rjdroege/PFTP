import { Component, OnInit } from '@angular/core';
import { Official } from 'src/app/shared/official/official.model';
import { CongressService } from '../congress.service';


@Component({
  selector: 'app-district-search',
  templateUrl: './district-search.component.html',
  styleUrls: ['./district-search.component.css']
})
export class DistrictSearchComponent implements OnInit {
officialResults: Official[] =[];


  constructor(
    private conService: CongressService,
    ) { }

  ngOnInit(): void {
  }

  onFormSubmit(searchText: string) {
    this.conService.getOfficials(searchText);
    this.conService.updatedOfficials.subscribe((officials: Official[]) => {
      this.officialResults = officials;
    });
  }



}
