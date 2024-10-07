import React from 'react'
import { CompleteMovie } from "@/infraestructure/interfaces/movie"
import { Text, View } from 'react-native'
import { Formatter } from '@/config/helpers/formatter'

interface Props {
  movie: CompleteMovie
}


const DescriptionMovie = ({ movie }: Props) => {
  return (
    <View className='px-4 my-4'>
      <Text>#{movie.rating} / {movie.genres.join(", ")}</Text>
      {/* description */}
      <Text className='mt-2 text-lg font-semibold'>Descripciòn:</Text>
      <Text className='mt-2'>{movie.description}</Text>
      {/* cast */}
      {/* costo de produccion */}
      <Text className='mt-2 text-lg font-semibold'>Costo de producciòn:</Text>
      <Text className='mt-2'>{Formatter.currency(movie.budget)}</Text>
      {/* revenue */}

    </View>
  )
}
export default DescriptionMovie