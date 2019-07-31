/* tslint:disable */
import { Genre } from './genre';
import { Movie } from './movie';
import { ProductionCompany } from './production-company';
import { Country } from './country';
import { SocialMedia } from './social-media';
import { Language } from './language';
export interface MovieDetails {
  adult?: boolean;
  genres?: Array<Genre>;
  id?: number;
  movie?: Movie;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  productionCompanyRests?: Array<ProductionCompany>;
  productionCountryRests?: Array<Country>;
  release_date?: string;
  restMovieId?: number;
  runtime?: number;
  socialMedia?: Array<SocialMedia>;
  spokenLanguageRests?: Array<Language>;
  title?: string;
  vote_average?: number;
}
