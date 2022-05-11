import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CongressService } from './congress.service';
import { Senator } from '../shared/senator/senate.model';

@Component({
  selector: 'app-congress',
  templateUrl: './congress.component.html',
  styleUrls: ['./congress.component.css']
})
export class CongressComponent implements OnInit {
  sens: Senator[] =[];

  constructor(private http: HttpClient, private conService: CongressService) { }

  ngOnInit(): void {
    this.conService.getSenate();
    this.conService.getReps();
    this.sens = this.conService.abbSens;

  }

}
