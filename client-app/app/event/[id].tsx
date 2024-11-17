import { Stack, useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'

import EventDetails from '~/features/events/EventDetails'
import events from '~/features/events/dummy_events.json'

export default function EventDetailsScreen() {
  const { id } = useLocalSearchParams()
  const event = events.find((event) => String(event.id) === id)

  if (!event) {
    return <Text>Event not found</Text>
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Event', headerBackButtonDisplayMode: 'minimal' }} />
      <EventDetails event={event} />
    </>
  )
}
