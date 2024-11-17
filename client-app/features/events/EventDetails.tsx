import Feather from '@expo/vector-icons/Feather'
import { format } from 'date-fns'
import { Image, Text, View } from 'react-native'

import type { Event } from './types'

type Props = {
  event: Event
}

export default function EventDetails({ event }: Props) {
  return (
    <View>
      <Image className="aspect-video w-2/5" source={{ uri: event.image }} />
      <Text>{event.title}</Text>
      <Feather name="calendar" size={20} color="gray" />
      <Text>{format(event.startDatetime, 'EEEE, d LLLL y')}</Text>
      <Text>{format(event.startDatetime, 'HH:mm')}</Text>
      <Feather name="map-pin" size={20} color="gray" />
      <Text>{event.location}</Text>
    </View>
  )
}
