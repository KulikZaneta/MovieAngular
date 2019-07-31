import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetailsControllerService } from 'src/api/services';
import { Observable } from 'rxjs';
import { MovieDetailsCache, SocialMedia, KeywordRest, RelaseDateRest, ReviewsRest } from 'src/api/models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public socialMedia: Observable<SocialMedia>
  public keyWord: Observable<KeywordRest>
  public relaseDate: Observable<RelaseDateRest>
  public reviews: Observable<ReviewsRest>
  public id: number
  public movieDetails: Observable<MovieDetailsCache>
  constructor(private route: ActivatedRoute, public movieDetailsControllerService: MovieDetailsControllerService) {
  
   }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id= params['id']
      this.movieDetails = this.movieDetailsControllerService.getMovieDetailsIdUsingGET(this.id)
      this.socialMedia = this.movieDetailsControllerService.getSocialMediaUsingGET(this.id)
      this.keyWord = this.movieDetailsControllerService.getKeywordsUsingGET(this.id)
      this.relaseDate = this.movieDetailsControllerService.getRelaseDateUsingGET(this.id)
      this.reviews = this.movieDetailsControllerService.getReviewsUsingGET(this.id)
      this.socialMedia.subscribe(x => console.log(x))
      this.keyWord.subscribe(x => console.log(x))
      this.relaseDate.subscribe(x => console.log(x))
      this.reviews.subscribe(x => console.log(x))
  });
  }

}
