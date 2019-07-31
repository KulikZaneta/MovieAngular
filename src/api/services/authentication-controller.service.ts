/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GuestSessionRest } from '../models/guest-session-rest';
import { TokenRest } from '../models/token-rest';

/**
 * Authentication Controller
 */
@Injectable({
  providedIn: 'root',
})
class AuthenticationControllerService extends __BaseService {
  static readonly getSessionUsingGETPath = '/auth/guest';
  static readonly getCreateTokenUsingGETPath = '/auth/token';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getSessionUsingGETResponse(): __Observable<__StrictHttpResponse<GuestSessionRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth/guest`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GuestSessionRest>;
      })
    );
  }
  /**
   * @return OK
   */
  getSessionUsingGET(): __Observable<GuestSessionRest> {
    return this.getSessionUsingGETResponse().pipe(
      __map(_r => _r.body as GuestSessionRest)
    );
  }

  /**
   * @return OK
   */
  getCreateTokenUsingGETResponse(): __Observable<__StrictHttpResponse<TokenRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/auth/token`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TokenRest>;
      })
    );
  }
  /**
   * @return OK
   */
  getCreateTokenUsingGET(): __Observable<TokenRest> {
    return this.getCreateTokenUsingGETResponse().pipe(
      __map(_r => _r.body as TokenRest)
    );
  }
}

module AuthenticationControllerService {
}

export { AuthenticationControllerService }
