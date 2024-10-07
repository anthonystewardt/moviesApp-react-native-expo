import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { Image, Pressable, Text, useWindowDimensions, View } from "react-native"


interface Props {
  poster: string
  originalTitle: string
  title: string
}


const HeaderDetailMovie = ({ poster, originalTitle, title }: Props) => {

  const { height: screenHeight } = useWindowDimensions()

  return (
    <>
      {/* gradient */}
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{
          height: screenHeight * 0.7,
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 10
        }}
      />

      {/* arrow back */}
      <View className='absolute z-50 shadow-lg left-6 top-10'>
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons name="arrow-back" size={24} color="white" className='shadow' />
        </Pressable>
      </View>
      <View
        style={{
          height: screenHeight * 0.7,
        }}
        className='shadow-xl shadow-black/20'
      >
        <View className='flex-1 rounded-b-[25px] overflow-hidden'>
          <Image
            source={{ uri: poster }}
            style={{
              height: '100%',
              width: '100%',
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View className='px-5 mt-5'>
        <Text className='mt-2 text-lg font-semibold'>{originalTitle}</Text>
        <Text className='text-3xl font-bold '>{title}</Text >
      </View>
    </>
  )
}
export default HeaderDetailMovie