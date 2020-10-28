/* tslint:disable */
import { Genre } from './genre';
import { Movie } from './movie';
import { SocialMedia } from './social-media';
export interface MovieDetails {
  genres?: Array<Genre>;
  id?: number;
  movie?: Movie;
  restMovieId?: number;
  socialMedia?: Array<SocialMedia>;
  title?: string;
}
