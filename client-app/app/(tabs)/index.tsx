import { Stack } from 'expo-router'
import { FlatList } from 'react-native'

import EventListItem from '~/features/events/EventListItem'
import events from '~/features/events/dummy_events.json'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <FlatList
        data={events}
        renderItem={({ item }) => (
          <EventListItem
            imageUrl={item.image}
            location={item.location}
            startDateTime={item.startDatetime}
            title={item.title}
          />
        )}
        className="bg-white"
      />
    </>
  )
}
