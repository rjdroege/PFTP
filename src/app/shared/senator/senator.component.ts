import { Component, Input, OnInit } from '@angular/core';
import { Senator } from './senate.model';

@Component({
  selector: 'app-senator',
  templateUrl: './senator.component.html',
  styleUrls: ['./senator.component.css']
})
export class SenatorComponent implements OnInit {
@Input() senator: Senator;
@Input() idx: number;

  constructor() { }

  ngOnInit(): void {
  }

}
