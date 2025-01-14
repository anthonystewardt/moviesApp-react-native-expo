import { CompleteMovie } from "../interfaces/movie";
import { MovieDetailI } from "../interfaces/movie-detail-response";

import { MovieDBResponse, Result } from "../interfaces/moviedb-response";


export class MovieMapper {
  static fromtheMovieDBToMovie = (movie: Result) => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date).toISOString(),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
    }
  }

  static fromTheMovieDetailResponseToCompleteMovie = (movie: MovieDetailI): CompleteMovie => {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date(movie.release_date).toISOString(),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
      genres: movie.genres.map((genre) => genre.name),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map(company => company.name)
    }
  }
}