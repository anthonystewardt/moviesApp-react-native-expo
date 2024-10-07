import { movieApi } from "@/core/api/movie-api";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";
import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";


export const upcomingMoviesAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>('/upcoming');
    const movies = data.results.map(MovieMapper.fromtheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log({ error });
    throw new Error('Error in upcomingMoviesAction');
  }
}
