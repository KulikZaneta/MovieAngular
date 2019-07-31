import { Component, OnInit } from '@angular/core';
import { MovieDbControllerService } from 'src/api/services';
import { MovieListRest, MovieUpcomingRest } from 'src/api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movieList: Observable<MovieListRest>
  public movieUpcoming: Observable<MovieUpcomingRest>

  constructor(public movieDbControllerService: MovieDbControllerService) { }

  ngOnInit() {
    console.log("HHH")
    this.movieList = this.movieDbControllerService.getMoviesUsingGET("1")
    this.movieUpcoming = this.movieDbControllerService.getMovieUpcomingUsingGET();
  }

}
