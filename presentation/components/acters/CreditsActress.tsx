import { Cast } from '@/infraestructure/interfaces/cast-response'
import React from 'react'
import { Image, Text, View } from 'react-native'

interface Props {
  actor: Cast
}

const CreditsActress = ({ actor }: Props) => {
  return (
    <View className="mx-10 w-[60px]">
      <Image
        source={{ uri: actor.avatar }}
        className="w-[100px] h-[150] rounded-2xl shadow"
        resizeMode="cover"
      />

      <View>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          className="text-lg font-bold"
        >
          {actor.name}
        </Text>
        <Text className="text-xs text-gray-600">{actor.character}</Text>
      </View>
    </View>
  )
}
export default CreditsActress