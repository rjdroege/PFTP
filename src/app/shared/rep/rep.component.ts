import { Component, Input, OnInit } from '@angular/core';
import { Rep } from './rep.model';

@Component({
  selector: 'app-rep',
  templateUrl: './rep.component.html',
  styleUrls: ['./rep.component.css']
})
export class RepComponent implements OnInit {
  @Input() rep: Rep;
  @Input() idx: number;

  constructor() { }

  ngOnInit(): void {
  }

}
