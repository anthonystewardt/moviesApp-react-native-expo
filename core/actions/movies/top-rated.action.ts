import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";

import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const ratedMoviesAction = async ({ page = 1, limit = 10 }: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>('/top_rated', {
      params: {
        page,
      }
    });
    const movies = data.results.map(MovieMapper.fromtheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log({ error });
    throw new Error('Error in ratedMoviesAction');
  }
}


