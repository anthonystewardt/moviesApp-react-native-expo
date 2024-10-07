import { movieApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infraestructure/interfaces/movie";
import { MovieDetailI } from "@/infraestructure/interfaces/movie-detail-response";

import { MovieMapper } from "@/infraestructure/mappers/movie.mapper";


export const getMovieDetailResponse = async (id: number | string): Promise<CompleteMovie> => {
  try {
    const { data } = await movieApi.get<MovieDetailI>(`/${id}`);
    const movie = MovieMapper.fromTheMovieDetailResponseToCompleteMovie(data);
    return movie;
  } catch (error) {
    console.log({ error });
    throw new Error('Error in nowPlayingAction');
  }
}