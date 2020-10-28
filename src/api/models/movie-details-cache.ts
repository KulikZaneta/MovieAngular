/* tslint:disable */
import { Genre } from './genre';
export interface MovieDetailsCache {
  genres?: Array<Genre>;
  id?: string;
  restMovieId?: number;
  title?: string;
}
