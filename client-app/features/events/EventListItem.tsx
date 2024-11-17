import Feather from '@expo/vector-icons/Feather'
import { format } from 'date-fns'
import { Link } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'

type EventListItemProps = {
  id: string
  imageUrl: string
  location: string
  startDateTime: string
  title: string
}

export default function EventListItem({ id, imageUrl, location, startDateTime, title }: EventListItemProps) {
  return (
    <Link href={`/event/${id}`} asChild>
      <Pressable className="m-3 gap-4 border-b-2 border-gray-100 pb-3">
        <View className="flex-row gap-1">
          <View className="flex-1 gap-2">
            <Text className="text-lg font-semibold uppercase color-stone-700">
              {format(startDateTime, 'E d, LLL • kk:mm')}
            </Text>
            <Text className=" text-2xl font-bold " numberOfLines={2}>
              {title}
            </Text>
            <Text className="text-gray-700">{location}</Text>
          </View>
          <Image className="aspect-video w-2/5 self-center rounded-xl" source={{ uri: imageUrl }} />
        </View>

        <View className="flex-row gap-3 ">
          <Text className="mr-auto text-gray-700">16 going</Text>
          <Feather name="share" size={20} color="gray" />
          <Feather name="bookmark" size={20} color="gray" />
        </View>
      </Pressable>
    </Link>
  )
}
