import FontAwesome from '@expo/vector-icons/FontAwesome'
import { Redirect, Tabs } from 'expo-router'

import useIsAuthenticated from '~/features/auth/useIsAuthenticated'

export default function TabLayout() {
  const isAuthenticated = useIsAuthenticated()

  if (!isAuthenticated) {
    return <Redirect href="/auth" />
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="adjust" color={color} />,
        }}
      />
    </Tabs>
  )
}
