import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CongressService } from './congress.service';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.css']
})
export class CongressComponent implements OnInit {

  constructor(private http: HttpClient, private conService: CongressService) { }

  ngOnInit(): void {


  }

}
