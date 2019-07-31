/* tslint:disable */
import { MovieRest } from './movie-rest';
export interface MovieListRest {
  created_by?: string;
  description?: string;
  favorite_count?: number;
  id?: string;
  iso_639_1?: string;
  item_count?: number;
  items?: Array<MovieRest>;
  name?: string;
  poster_path?: string;
}
