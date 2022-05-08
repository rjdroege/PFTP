import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

const GOOGLE_API_KEY: string = 'AIzaSyDYr1mNEY1XPrfD05uLZKHfeCl8-bk5bw4';
// const ADDRESS_URL: string =
// 'https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=
// '1700%20Perryville%20Rd.%20Cape%20Girardeau%2C%20MO
// &includeOffices=true&levels=country&key=[YOUR_API_KEY]';

@Component({
  selector: 'app-district-search',
  templateUrl: './district-search.component.html',
  styleUrls: ['./district-search.component.css']
})
export class DistrictSearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  onFormSubmit(searchText: string) {
    const headers = new HttpHeaders ({ 'accept': 'application/json' });
    const formattedQuery = searchText.split(" ").join("%20");
    this.http.get(`https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${formattedQuery}&includeOffices=true&levels=country&key=${GOOGLE_API_KEY}`,
    {headers: headers}).subscribe((res) => {
      console.log(res);
    })

  }

}
