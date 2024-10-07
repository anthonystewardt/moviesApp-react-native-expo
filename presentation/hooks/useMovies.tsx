import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import { popularMoviesAction } from '@/core/actions/movies/popular-movies.action'
import { ratedMoviesAction } from '@/core/actions/movies/top-rated.action'
import { upcomingMoviesAction } from '@/core/actions/movies/upcoming-movies.action'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'



export const useMovieQuery = () => {


  const nowPlayingQuery = useQuery({
    queryKey: ['movies', 'nowPlaying'],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })

  const popularMoviesQuery = useQuery({
    queryKey: ['movies', 'popular'],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })

  const topRatedMoviesQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['movies', 'topRated'],
    queryFn: ({ pageParam }) => {

      return ratedMoviesAction({ page: pageParam })
    },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    getNextPageParam: (lastPage, pages) => pages.length + 1
  })

  const upComingMoviesQuery = useQuery({
    queryKey: ['movies', 'upcoming'],
    queryFn: upcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24 // 24 hours
  })

  return {
    nowPlayingQuery,
    popularMoviesQuery,
    topRatedMoviesQuery,
    upComingMoviesQuery
  }
}