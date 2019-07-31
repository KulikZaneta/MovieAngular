import { Component, OnInit } from '@angular/core';
import { RapidControllerService } from 'src/api/services';
import { Observable } from 'rxjs';
import { Peoples } from 'src/api/models';

@Component({
  selector: 'app-peoples-star-wars',
  templateUrl: './peoples-star-wars.component.html',
  styleUrls: ['./peoples-star-wars.component.scss']
})
export class PeoplesStarWarsComponent implements OnInit {

  public peopleRest: Observable<Peoples[]>
  constructor(public peopleService: RapidControllerService) { }

  ngOnInit() {
    this.peopleRest = this.peopleService.getPeoplesUsingPOST()

  }

}
