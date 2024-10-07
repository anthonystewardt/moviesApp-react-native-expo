import React from 'react'
import { useMovieQuery } from '@/presentation/hooks/useMovies'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MainSlideShow from '@/presentation/components/movies/MainSlideShow'
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action'
import SectionMoviesList from '@/presentation/components/movies/SectionMoviesList'
import { ScrollView } from 'react-native-gesture-handler'


const HomeScreen = () => {

  const { nowPlayingQuery, popularMoviesQuery, topRatedMoviesQuery, upComingMoviesQuery } = useMovieQuery()
  const safearea = useSafeAreaInsets()


  if (nowPlayingQuery.isLoading) {
    return (
      <View className='items-center justify-center flex-1'>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <ScrollView className=''>
      <View className='pb-10 mt-2 ' style={{ paddingTop: safearea.top }}>
        <Text className='px-4 mb-5 ml-4 text-3xl font-bold'>HomeScreen</Text>
        <MainSlideShow data={nowPlayingQuery.data ?? []} />
        <SectionMoviesList isBig movies={popularMoviesQuery.data ?? []} title="Populares" />
        <SectionMoviesList
          movies={topRatedMoviesQuery.data?.pages.flat() ?? []}
          title="Màs Destacados"
          loadNextPage={() => topRatedMoviesQuery.fetchNextPage()}
        />
        <SectionMoviesList movies={upComingMoviesQuery.data ?? []} title="Pròximamente" />

      </View>
    </ScrollView>
  )
}
export default HomeScreen
