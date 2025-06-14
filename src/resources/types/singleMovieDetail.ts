interface GenreType {
  id: number;
  name: string;
}

interface ProductionCompanyType {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface ProductionCountryType {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguageType {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface MovieDetailsType {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: GenreType[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompanyType[];
  production_countries: ProductionCountryType[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguageType[];
  status: 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
