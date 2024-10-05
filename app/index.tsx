import { Redirect } from 'expo-router'
import { View, Text } from 'react-native'


const RootPage = () => {
  return (
    <Redirect href="/home" />
  )
}
export default RootPage