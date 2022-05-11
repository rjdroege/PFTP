import { Component, Input, OnInit } from '@angular/core';
import { CongressService } from 'src/app/congress/congress.service';
import { Senator } from './senate.model';

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.css']
})
export class SenatorComponent implements OnInit {
  senators: Senator[] = [];
  constructor(private conService: CongressService) { }

  ngOnInit(): void {
    this.conService.getSenate();
    this.senators = this.conService.abbSens;
  }

}
