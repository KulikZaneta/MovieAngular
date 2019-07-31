/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { AuthenticationControllerService } from './services/authentication-controller.service';
import { CompanyControllerService } from './services/company-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { MovieDetailsControllerService } from './services/movie-details-controller.service';
import { MovieDbControllerService } from './services/movie-db-controller.service';
import { SearchControllerService } from './services/search-controller.service';
import { RapidControllerService } from './services/rapid-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    AuthenticationControllerService,
    CompanyControllerService,
    BasicErrorControllerService,
    MovieDetailsControllerService,
    MovieDbControllerService,
    SearchControllerService,
    RapidControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
