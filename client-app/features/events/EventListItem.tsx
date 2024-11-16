import Feather from '@expo/vector-icons/Feather'
import { Image, Text, View } from 'react-native'

export default function EventListItem() {
  return (
    <View className="m-3 gap-4 border-b-2 border-gray-100 pb-3">
      <View className="flex-row gap-1">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase color-stone-700">Sat 16, Nov • 19:00 EET</Text>
          <Text className=" text-2xl font-bold " numberOfLines={2}>
            Magic workshop
          </Text>
          <Text className="text-gray-700">Online</Text>
        </View>
        <Image
          className="aspect-video w-2/5 self-center rounded-xl"
          source={{ uri: 'https://picsum.photos/seed/react1/300/200' }}
        />
      </View>

      <View className="flex-row gap-3 ">
        <Text className="mr-auto text-gray-700">16 going</Text>
        <Feather name="share" size={20} color="gray" />
        <Feather name="bookmark" size={20} color="gray" />
      </View>
    </View>
  )
}
