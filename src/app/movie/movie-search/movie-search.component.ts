import { Component, OnInit } from '@angular/core';
import { SearchControllerService } from 'src/api/services';
import { Observable } from 'rxjs';
import { CompaniesRest, CollectionsRest, KeywordRest } from 'src/api/models';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  public searchCompany: Observable<CompaniesRest>
  public searchCollection: Observable<CollectionsRest>
  public searchKeyword: Observable<KeywordRest>
  constructor(public searchControllerService: SearchControllerService) { }

  ngOnInit() {
    this.searchCompany = this.searchControllerService.getCompaniesUsingGET();
    this.searchCollection = this.searchControllerService.getCollectionsUsingGET();
    this.searchKeyword = this.searchControllerService.getKeywordsUsingGET1();
  }

}
