import { Component, OnInit } from '@angular/core';
import { RapidControllerService } from 'src/api/services';
import { Observable } from 'rxjs';
import {  Planets } from 'src/api/models';

@Component({
  selector: 'app-planets-star-wars',
  templateUrl: './planets-star-wars.component.html',
  styleUrls: ['./planets-star-wars.component.scss']
})
export class PlanetsStarWarsComponent implements OnInit {

  public planetRest: Observable<Planets[]>
  constructor(public planetService: RapidControllerService) { }

  ngOnInit() {
    this.planetRest = this.planetService.getPlanetsUsingPOST()

  }

}
