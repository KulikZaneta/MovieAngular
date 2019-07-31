import { Component, OnInit } from '@angular/core';
import { RapidControllerService } from 'src/api/services';
import { Films } from 'src/api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-star-wars',
  templateUrl: './movie-star-wars.component.html',
  styleUrls: ['./movie-star-wars.component.scss']
})
export class MovieStarWarsComponent implements OnInit {

  public filmsRest: Observable<Films[]>
  constructor(public starWarsService: RapidControllerService) { }

  ngOnInit() {
   this.filmsRest = this.starWarsService.getFilmsUsingPOST()
  }

}
