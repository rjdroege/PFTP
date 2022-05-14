import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Official } from 'src/app/shared/official/official.model';
import { CongressService } from '../congress.service';

@Component({
  selector: 'app-official-results',
  templateUrl: './official-results.component.html',
  styleUrls: ['./official-results.component.css']
})
export class OfficialResultsComponent implements OnInit {
  officialResults: Official[]=[];

  constructor(private conService: CongressService) { }

  ngOnInit(): void {
    this.conService.updatedOfficials.subscribe((officials: Official[]) => {
      this.officialResults = officials;
    });
  }

}
