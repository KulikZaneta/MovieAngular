/* tslint:disable */
import { CollectionResultRest } from './collection-result-rest';
export interface CollectionsRest {
  page?: number;
  results?: Array<CollectionResultRest>;
  total_pages?: number;
  total_results?: number;
}
