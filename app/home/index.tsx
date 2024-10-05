import React from 'react'
import { useMovieQuery } from '@/presentation/hooks/useMovies'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const HomeScreen = () => {

  const { nowPlayingQuery } = useMovieQuery()
  const safearea = useSafeAreaInsets()

  if (nowPlayingQuery.isLoading) {
    return (
      <View className='items-center justify-center flex-1'>
        <ActivityIndicator size="large" />
      </View>
    )
  }


  return (
    <View className='mt-2 border-2 border-red-600' style={{ paddingTop: safearea.top }}>
      <Text className='px-4 ml-4 text-3xl font-bold'>HomeScreen</Text>
    </View>
  )
}
export default HomeScreen
