import Feather from '@expo/vector-icons/Feather'
import { Image, Text } from 'react-native'

export default function EventListItem() {
  return (
    <>
      <Text>Sat 16, Nov • 19:00 EET</Text>
      <Text className="text-2xl">Magic workshop</Text>
      <Text>Online</Text>
      <Image source={{ uri: 'https://picsum.photos/seed/react1/300/200', width: 300, height: 200 }} />
      <Text>16 going</Text>
      <Feather name="share" size={24} color="black" />
      <Feather name="bookmark" size={24} color="black" />
    </>
  )
}
