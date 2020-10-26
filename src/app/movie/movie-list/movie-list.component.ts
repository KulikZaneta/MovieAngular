import { Component, OnInit } from '@angular/core';
import { MovieDbControllerService } from 'src/api/services';
import { MovieListRest } from 'src/api/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movieList: Observable<MovieListRest>

  constructor(public movieDbControllerService: MovieDbControllerService) { }

  ngOnInit() {
    this.movieList = this.movieDbControllerService.getMoviesUsingGET("1")
  }

}
