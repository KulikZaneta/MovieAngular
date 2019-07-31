/* tslint:disable */
import { MovieDetails } from './movie-details';
export interface Movie {
  id?: number;
  movieDetails?: MovieDetails;
  originalLanguage?: string;
  popularity?: number;
  releaseDate?: string;
  restId?: number;
  title?: string;
}
