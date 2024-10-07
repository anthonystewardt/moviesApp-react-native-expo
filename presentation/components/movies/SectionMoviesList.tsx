import { Movie } from '@/infraestructure/interfaces/movie'
import { View, Text, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import PosterShow from './PosterShow'
import { useEffect, useRef } from 'react'

interface Props {
  movies: Movie[],
  title?: string,
  isBig?: boolean,
  loadNextPage?: () => void
}

const SectionMoviesList = ({ movies, title, isBig, loadNextPage }: Props) => {
  const isLoadind = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      isLoadind.current = false
    }, 200)
  }, [movies])



  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoadind.current) return

    const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent




    const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width
    if (isEndReached) {
      isLoadind.current = true
      console.log('End reached')
      loadNextPage && loadNextPage()
    }

    // load more data


  }


  return (
    <View className={`${isBig ? "mt-32" : "mt-10"}`}>
      <Text className="pl-3 mb-2 text-2xl font-semibold">{title}</Text>
      <FlatList
        className=""
        data={movies}
        renderItem={({ item }) => (
          <PosterShow id={item.id} poster={item.poster} smallPoster />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};
export default SectionMoviesList