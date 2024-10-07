import { movieApi } from "@/core/api/movie-api";

import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";

import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

export const popularMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>('/popular');

    const movies = data.results.map(MovieMapper.fromtheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log({ error });
    throw new Error('Error in popularMoviesAction');
  }
}