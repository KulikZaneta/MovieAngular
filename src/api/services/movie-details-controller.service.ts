/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { KeywordRest } from '../models/keyword-rest';
import { SocialMedia } from '../models/social-media';
import { MovieDetailsCache } from '../models/movie-details-cache';

/**
 * Movie Details Controller
 */
@Injectable({
  providedIn: 'root',
})
class MovieDetailsControllerService extends __BaseService {
  static readonly getKeywordsUsingGETPath = '/movie-details/keywords/{restMovieId}';
  static readonly getSocialMediaUsingGETPath = '/movie-details/social-media/{restMovieId}';
  static readonly getMovieDetailsIdUsingGETPath = '/movie-details/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param restMovieId restMovieId
   * @return OK
   */
  getKeywordsUsingGETResponse(restMovieId: number): __Observable<__StrictHttpResponse<KeywordRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/movie-details/keywords/${restMovieId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<KeywordRest>;
      })
    );
  }
  /**
   * @param restMovieId restMovieId
   * @return OK
   */
  getKeywordsUsingGET(restMovieId: number): __Observable<KeywordRest> {
    return this.getKeywordsUsingGETResponse(restMovieId).pipe(
      __map(_r => _r.body as KeywordRest)
    );
  }

  /**
   * @param restMovieId restMovieId
   * @return OK
   */
  getSocialMediaUsingGETResponse(restMovieId: number): __Observable<__StrictHttpResponse<SocialMedia>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/movie-details/social-media/${restMovieId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SocialMedia>;
      })
    );
  }
  /**
   * @param restMovieId restMovieId
   * @return OK
   */
  getSocialMediaUsingGET(restMovieId: number): __Observable<SocialMedia> {
    return this.getSocialMediaUsingGETResponse(restMovieId).pipe(
      __map(_r => _r.body as SocialMedia)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  getMovieDetailsIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<MovieDetailsCache>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/movie-details/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<MovieDetailsCache>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  getMovieDetailsIdUsingGET(id: number): __Observable<MovieDetailsCache> {
    return this.getMovieDetailsIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as MovieDetailsCache)
    );
  }
}

module MovieDetailsControllerService {
}

export { MovieDetailsControllerService }
