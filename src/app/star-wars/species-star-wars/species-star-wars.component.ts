import { Component, OnInit } from '@angular/core';
import {  Species } from 'src/api/models';
import { Observable } from 'rxjs';
import { RapidControllerService } from 'src/api/services';

@Component({
  selector: 'app-species-star-wars',
  templateUrl: './species-star-wars.component.html',
  styleUrls: ['./species-star-wars.component.scss']
})
export class SpeciesStarWarsComponent implements OnInit {

  public speciesRest: Observable<Species[]>
  constructor(public speciesService: RapidControllerService) { }

  ngOnInit() {
    this.speciesRest = this.speciesService.getSpeciesUsingPOST()
  }

}
