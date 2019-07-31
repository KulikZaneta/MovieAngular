/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CollectionsRest } from '../models/collections-rest';
import { CompaniesRest } from '../models/companies-rest';
import { KeywordRest } from '../models/keyword-rest';

/**
 * Search Controller
 */
@Injectable({
  providedIn: 'root',
})
class SearchControllerService extends __BaseService {
  static readonly getCollectionsUsingGETPath = '/search/collections';
  static readonly getCompaniesUsingGETPath = '/search/companies';
  static readonly getKeywordsUsingGET1Path = '/search/keywords';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getCollectionsUsingGETResponse(): __Observable<__StrictHttpResponse<CollectionsRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/search/collections`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CollectionsRest>;
      })
    );
  }
  /**
   * @return OK
   */
  getCollectionsUsingGET(): __Observable<CollectionsRest> {
    return this.getCollectionsUsingGETResponse().pipe(
      __map(_r => _r.body as CollectionsRest)
    );
  }

  /**
   * @return OK
   */
  getCompaniesUsingGETResponse(): __Observable<__StrictHttpResponse<CompaniesRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/search/companies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompaniesRest>;
      })
    );
  }
  /**
   * @return OK
   */
  getCompaniesUsingGET(): __Observable<CompaniesRest> {
    return this.getCompaniesUsingGETResponse().pipe(
      __map(_r => _r.body as CompaniesRest)
    );
  }

  /**
   * @return OK
   */
  getKeywordsUsingGET1Response(): __Observable<__StrictHttpResponse<KeywordRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/search/keywords`,
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
   * @return OK
   */
  getKeywordsUsingGET1(): __Observable<KeywordRest> {
    return this.getKeywordsUsingGET1Response().pipe(
      __map(_r => _r.body as KeywordRest)
    );
  }
}

module SearchControllerService {
}

export { SearchControllerService }
