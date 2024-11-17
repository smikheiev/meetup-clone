import { Text } from 'react-native'

import type { Event } from './types'

type Props = {
  event: Event
}

export default function EventDetails({ event }: Props) {
  return <Text>{event.title}</Text>
}
