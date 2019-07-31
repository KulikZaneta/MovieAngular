/* tslint:disable */
import { Genre } from './genre';
import { ProductionCompany } from './production-company';
import { Country } from './country';
import { Language } from './language';
export interface MovieDetailsCache {
  adult?: boolean;
  genres?: Array<Genre>;
  id?: string;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  productionCompanyRests?: Array<ProductionCompany>;
  productionCountryRests?: Array<Country>;
  release_date?: string;
  restMovieId?: number;
  runtime?: number;
  spokenLanguageRests?: Array<Language>;
  title?: string;
  vote_average?: number;
}
