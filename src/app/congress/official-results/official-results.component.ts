import { Component, OnInit } from '@angular/core';
import { HTTPService } from 'src/app/shared/http/http.service';
import { Official } from 'src/app/shared/official/official.model';
import { CongressService } from '../congress.service';

@Component({
  selector: 'app-official-results',
  templateUrl: './official-results.component.html',
  styleUrls: ['./official-results.component.css']
})
export class OfficialResultsComponent implements OnInit {
  officialResults: Official[]=[];

  constructor(private conService: CongressService, private http: HTTPService) { }

  ngOnInit(): void {
    this.conService.updatedOfficials.subscribe((officials: Official[]) => {
      this.officialResults = officials;
    });
  }

  onSaveResults(){
    this.http.saveOfficialsToFirebase();
  }
}
