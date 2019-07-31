/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Films } from '../models/films';
import { Peoples } from '../models/peoples';
import { Planets } from '../models/planets';
import { Species } from '../models/species';
import { StarShips } from '../models/star-ships';
import { Vehicles } from '../models/vehicles';

/**
 * Rapid Controller
 */
@Injectable({
  providedIn: 'root',
})
class RapidControllerService extends __BaseService {
  static readonly getFilmsUsingPOSTPath = '/star-wars/films';
  static readonly getPeoplesUsingPOSTPath = '/star-wars/peoples';
  static readonly getPlanetsUsingPOSTPath = '/star-wars/planets';
  static readonly getSpeciesUsingPOSTPath = '/star-wars/species';
  static readonly getStarShipsUsingPOSTPath = '/star-wars/star-ships';
  static readonly getVehiclesUsingPOSTPath = '/star-wars/vehicles';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getFilmsUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<Films>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/star-wars/films`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Films>>;
      })
    );
  }
  /**
   * @return OK
   */
  getFilmsUsingPOST(): __Observable<Array<Films>> {
    return this.getFilmsUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<Films>)
    );
  }

  /**
   * @return OK
   */
  getPeoplesUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<Peoples>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/star-wars/peoples`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Peoples>>;
      })
    );
  }
  /**
   * @return OK
   */
  getPeoplesUsingPOST(): __Observable<Array<Peoples>> {
    return this.getPeoplesUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<Peoples>)
    );
  }

  /**
   * @return OK
   */
  getPlanetsUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<Planets>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/star-wars/planets`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Planets>>;
      })
    );
  }
  /**
   * @return OK
   */
  getPlanetsUsingPOST(): __Observable<Array<Planets>> {
    return this.getPlanetsUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<Planets>)
    );
  }

  /**
   * @return OK
   */
  getSpeciesUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<Species>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/star-wars/species`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Species>>;
      })
    );
  }
  /**
   * @return OK
   */
  getSpeciesUsingPOST(): __Observable<Array<Species>> {
    return this.getSpeciesUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<Species>)
    );
  }

  /**
   * @return OK
   */
  getStarShipsUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<StarShips>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/star-wars/star-ships`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<StarShips>>;
      })
    );
  }
  /**
   * @return OK
   */
  getStarShipsUsingPOST(): __Observable<Array<StarShips>> {
    return this.getStarShipsUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<StarShips>)
    );
  }

  /**
   * @return OK
   */
  getVehiclesUsingPOSTResponse(): __Observable<__StrictHttpResponse<Array<Vehicles>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/star-wars/vehicles`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Vehicles>>;
      })
    );
  }
  /**
   * @return OK
   */
  getVehiclesUsingPOST(): __Observable<Array<Vehicles>> {
    return this.getVehiclesUsingPOSTResponse().pipe(
      __map(_r => _r.body as Array<Vehicles>)
    );
  }
}

module RapidControllerService {
}

export { RapidControllerService }
