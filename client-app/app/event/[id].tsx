import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams()

  return <Text>Event id: {id}</Text>
}
