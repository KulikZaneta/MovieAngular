/* tslint:disable */
import { MovieRest } from './movie-rest';
export interface MovieListRest {
  id?: string;
  items?: Array<MovieRest>;
  name?: string;
}
