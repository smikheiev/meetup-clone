import Feather from '@expo/vector-icons/Feather'
import { format } from 'date-fns'
import { Image, Pressable, Text, View } from 'react-native'

import type { Event } from './types'

type Props = {
  event: Event
}

export default function EventDetails({ event }: Props) {
  return (
    <>
      <View className="flex-1 gap-6 p-3">
        <View className="gap-4">
          <Image className="aspect-video w-full rounded-xl" source={{ uri: event.image }} />
          <Text className="text-4xl font-bold">{event.title}</Text>
        </View>
        <View className="flex-row gap-3">
          <Feather className="self-center" name="calendar" size={28} color="gray" />
          <View>
            <Text className="text-xl font-semibold">{format(event.startDatetime, 'E d, LLL • kk:mm')}</Text>
          </View>
        </View>
        <View className="flex-row gap-3">
          <Feather name="map-pin" size={28} color="gray" />
          <Text className="text-xl font-semibold">{event.location}</Text>
        </View>
        <Text className="text-lg">{event.description}</Text>
      </View>
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between border-t-2 border-t-gray-300 p-4 pb-14">
        <Text className="text-2xl font-semibold">Free</Text>
        <Pressable className="rounded-lg bg-red-300 p-4 px-8">
          <Text className="text-2xl font-semibold text-white">Join</Text>
        </Pressable>
      </View>
    </>
  )
}
