import { movieApi } from "@/core/api/movie-api";
import { Cast } from "@/infraestructure/interfaces/cast-response"
import { CreditsResponse } from "@/infraestructure/interfaces/credits-response"
import { CastMapper } from "@/infraestructure/mappers/cast-mapper";


export const getCredistResponse = async (idMovie: number): Promise<Cast[]> => {
  try {
    const { data } = await movieApi.get<CreditsResponse>(`/${idMovie}/credits`);
    const casts = data.cast.map((actor) => {
      return CastMapper.fromMovieDBCastToEntity(actor);
    })
    console.log({ data: casts })
    return casts;
  } catch (error) {
    throw new Error('Error in getCredistResponse');
  }
}