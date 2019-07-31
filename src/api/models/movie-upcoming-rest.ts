/* tslint:disable */
import { DateUpcomingRest } from './date-upcoming-rest';
import { ResultsUpcomingRest } from './results-upcoming-rest';
export interface MovieUpcomingRest {
  dates?: DateUpcomingRest;
  page?: number;
  results?: Array<ResultsUpcomingRest>;
  total_pages?: number;
  total_results?: number;
}
