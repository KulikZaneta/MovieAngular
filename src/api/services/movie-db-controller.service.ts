/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { MovieListRest } from '../models/movie-list-rest';
import { MovieUpcomingRest } from '../models/movie-upcoming-rest';

/**
 * Movie Db Controller
 */
@Injectable({
  providedIn: 'root',
})
class MovieDbControllerService extends __BaseService {
  static readonly getMoviesUsingGETPath = '/movie/list/{listId}';
  static readonly getMovieUpcomingUsingGETPath = '/movie/upcoming';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param listId listId
   * @return OK
   */
  getMoviesUsingGETResponse(listId: string): __Observable<__StrictHttpResponse<MovieListRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/movie/list/${listId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MovieListRest>;
      })
    );
  }
  /**
   * @param listId listId
   * @return OK
   */
  getMoviesUsingGET(listId: string): __Observable<MovieListRest> {
    return this.getMoviesUsingGETResponse(listId).pipe(
      __map(_r => _r.body as MovieListRest)
    );
  }

  /**
   * @return OK
   */
  getMovieUpcomingUsingGETResponse(): __Observable<__StrictHttpResponse<MovieUpcomingRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/movie/upcoming`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MovieUpcomingRest>;
      })
    );
  }
  /**
   * @return OK
   */
  getMovieUpcomingUsingGET(): __Observable<MovieUpcomingRest> {
    return this.getMovieUpcomingUsingGETResponse().pipe(
      __map(_r => _r.body as MovieUpcomingRest)
    );
  }
}

module MovieDbControllerService {
}

export { MovieDbControllerService }
