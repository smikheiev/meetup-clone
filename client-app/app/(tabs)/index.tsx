import { Stack } from 'expo-router'

import EventListItem from '~/features/events/EventListItem'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <EventListItem />
    </>
  )
}
