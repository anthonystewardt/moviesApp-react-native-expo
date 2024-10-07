import { getCredistResponse } from "@/core/actions/movie/get-credits.actions"
import { getMovieDetailResponse } from "@/core/actions/movie/get-movie-by-id.action"
import { useQuery } from "@tanstack/react-query"



export const useMovieDetailQuery = (id: number) => {


  const detailMovieQuery = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetailResponse(id),
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })

  const castMovieQuery = useQuery({
    queryKey: ['movie', id, 'cast'],
    queryFn: () => getCredistResponse(id),
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })



  return {
    detailMovieQuery,
    castMovieQuery
  }
}