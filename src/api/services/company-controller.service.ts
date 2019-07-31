/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CompanyDetailsRest } from '../models/company-details-rest';
import { OtherNameCompanyRest } from '../models/other-name-company-rest';

/**
 * Company Controller
 */
@Injectable({
  providedIn: 'root',
})
class CompanyControllerService extends __BaseService {
  static readonly getCompanyDetailsUsingGETPath = '/company/details/{restCompanyId}';
  static readonly getOtherNameUsingGETPath = '/company/other-name/{restCompanyId}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param restCompanyId restCompanyId
   * @return OK
   */
  getCompanyDetailsUsingGETResponse(restCompanyId: number): __Observable<__StrictHttpResponse<CompanyDetailsRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/company/details/${restCompanyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CompanyDetailsRest>;
      })
    );
  }
  /**
   * @param restCompanyId restCompanyId
   * @return OK
   */
  getCompanyDetailsUsingGET(restCompanyId: number): __Observable<CompanyDetailsRest> {
    return this.getCompanyDetailsUsingGETResponse(restCompanyId).pipe(
      __map(_r => _r.body as CompanyDetailsRest)
    );
  }

  /**
   * @param restCompanyId restCompanyId
   * @return OK
   */
  getOtherNameUsingGETResponse(restCompanyId: number): __Observable<__StrictHttpResponse<OtherNameCompanyRest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/company/other-name/${restCompanyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OtherNameCompanyRest>;
      })
    );
  }
  /**
   * @param restCompanyId restCompanyId
   * @return OK
   */
  getOtherNameUsingGET(restCompanyId: number): __Observable<OtherNameCompanyRest> {
    return this.getOtherNameUsingGETResponse(restCompanyId).pipe(
      __map(_r => _r.body as OtherNameCompanyRest)
    );
  }
}

module CompanyControllerService {
}

export { CompanyControllerService }
