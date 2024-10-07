import { Movie } from '@/infraestructure/interfaces/movie';
import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel';
import PosterShow from './PosterShow';

interface Props {
  data: Movie[]
}


const MainSlideShow = ({ data }: Props) => {

  const width = useWindowDimensions().width
  const ref = React.useRef(null)


  return (
    <View className='h-[250px] w-full'>
      <Carousel
        ref={ref}
        data={data}
        renderItem={({ item }) => (
          <PosterShow id={item.id} poster={item.poster} />
        )}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 50,
          parallaxScrollingScale: 0.9
        }}
        defaultIndex={1}
      />
    </View>
  )
}
export default MainSlideShow;
