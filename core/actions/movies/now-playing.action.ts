import { movieApi } from "@/core/api/movie-api";
import { MovieDBResponse } from "@/infraestructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";


export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBResponse>('/now_playing');

    const movies = data.results.map(MovieMapper.fromtheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log({ error });
    throw new Error('Error in nowPlayingAction');
  }
}