import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CongressService } from './congress.service';
import { Elected } from './congress.model';

const CONGRESS_API_KEY: string = 'NtMWNbbMMNADlfbsm0a71OVYN0HXLgU0C5AUU3AF';
const GEOCODE_API_KEY: string = '';
const GEOCODE_URL: string = '';
const SENATE_URL: string = 'https://api.propublica.org/congress/v1/117/senate/members.json';
const HOUSE_URL: string = 'https://api.propublica.org/congress/v1/117/house/members.json';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.css']
})
export class CongressComponent implements OnInit {
  @Input() sen: Elected;
  allSens: Elected[] = [];

  constructor(private http: HttpClient, private conService: CongressService) { }

  ngOnInit(): void {
    this.allSens = [
      {first_name: 'Alma', last_name: 'Adams', state: 'NC', district: '12'},
      {first_name: 'Jason', last_name: 'Smith', state: 'MO', district: '8'}
    ]
      }

      getSenate() {
        const headers = new HttpHeaders ({ 'X-API-Key': 'NtMWNbbMMNADlfbsm0a71OVYN0HXLgU0C5AUU3AF'
        });
        return this.http.get<Elected[]>(SENATE_URL, {headers: headers}).subscribe((res) => {
          console.log(res);
          this.saveSens(res);
        });
      }
      saveSens(sens: Elected[]) {
        ((sens) => {
          const { first_name, last_name, state, district } = sens;

          const newSen = new Elected(
            first_name,
            last_name,
            state,
            district ? district : '',
          );
          console.log(newSen);
        });

      }


  onFormSubmit(formObj: NgForm) {
    this.getSenate();
  }
}
