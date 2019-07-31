/* tslint:disable */
import { DetailsResultRest } from './details-result-rest';
export interface ReviewsRest {
  id?: number;
  page?: string;
  results?: Array<DetailsResultRest>;
  total_pages?: number;
  total_results?: number;
}
