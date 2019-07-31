/* tslint:disable */
import { MovieDetailsDateRest } from './movie-details-date-rest';
export interface MovieResultsRest {
  iso_3166_1?: string;
  release_dates?: Array<MovieDetailsDateRest>;
}
