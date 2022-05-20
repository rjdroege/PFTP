import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CongressService } from '../congress.service';
import { Official } from '../official.model';

@Component({
  selector: 'app-officials-page',
  templateUrl: './officials-page.component.html',
  styleUrls: ['./officials-page.component.css']
})
export class OfficialsPageComponent implements OnInit {
  @Input() idx: number;
  @Input() official: Official;

  constructor(private router: ActivatedRoute, private conService: CongressService) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.official = this.conService.getOfficial(this.idx);
    })
  }

}
