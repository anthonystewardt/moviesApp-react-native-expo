import { router } from "expo-router"
import { Image, Pressable, Text, View } from "react-native"

interface Props {
  id: number,
  poster: string,
  smallPoster?: boolean,
  className?: string
}


const PosterShow = ({ id, poster, smallPoster, className }: Props) => {
  return (
    <Pressable className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster}` }}
        style={{
          height: smallPoster ? 200 : 350,
          width: smallPoster ? 120 : 220,
          borderRadius: 10
        }}
        resizeMode="cover"
      />
    </Pressable>
  )
}
export default PosterShow