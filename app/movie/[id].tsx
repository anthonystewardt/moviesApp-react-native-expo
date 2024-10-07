import { getMovieDetailResponse } from '@/core/actions/movie/get-movie-by-id.action'
import CreditsActress from '@/presentation/components/acters/CreditsActress'
import DescriptionMovie from '@/presentation/components/movies/DescriptionMovie'
import HeaderDetailMovie from '@/presentation/components/movies/HeaderDetailMovie'
import { useMovieDetailQuery } from '@/presentation/hooks/useMovie'
import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
const MovieScreen = () => {
  const { id } = useLocalSearchParams()
  const { detailMovieQuery, castMovieQuery } = useMovieDetailQuery(+id)


  if (detailMovieQuery.isLoading || !detailMovieQuery.data) {
    return (
      <View className='items-center justify-center flex-1'>
        <Text className='text-2xl font-semibold'>Loading...</Text>
        <ActivityIndicator size="large" color={"purple"} />
      </View>
    )
  }


  return (
    <ScrollView className='pb-4'>
      <HeaderDetailMovie
        poster={detailMovieQuery.data.poster}
        title={detailMovieQuery.data.title}
        originalTitle={detailMovieQuery.data.originalTitle}
      />
      <DescriptionMovie movie={detailMovieQuery.data} />

      <FlatList
        data={castMovieQuery.data ?? []}
        renderItem={({ item }) => (
          <CreditsActress
            actor={item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className='mt-5'
      />

    </ScrollView>
  )
}

export default MovieScreen