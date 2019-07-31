import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StarShips } from 'src/api/models';
import { RapidControllerService } from 'src/api/services';

@Component({
  selector: 'app-star-ships-star-wars',
  templateUrl: './star-ships-star-wars.component.html',
  styleUrls: ['./star-ships-star-wars.component.scss']
})
export class StarShipsStarWarsComponent implements OnInit {

  public starShipRest: Observable<StarShips[]>
  constructor(public starShipService: RapidControllerService) { }

  ngOnInit() {
   this.starShipRest = this.starShipService.getStarShipsUsingPOST()
  }

}
