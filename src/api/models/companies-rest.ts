/* tslint:disable */
import { CompanyResultsRest } from './company-results-rest';
export interface CompaniesRest {
  page?: number;
  results?: Array<CompanyResultsRest>;
  total_pages?: number;
  total_results?: number;
}
